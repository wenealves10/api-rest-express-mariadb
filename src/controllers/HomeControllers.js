import 'dotenv/config';
import jwt from 'jsonwebtoken';
import validate from 'validator';
import bcrypt from 'bcryptjs';
import User from '../models/User';

class HomeControllers {
  async login(req, res) {
    try {
      if (!validate.isEmail(req.body.email)) {
        return res.status(400).json({ error: ['Invalid email'] });
      }
      if (validate.isEmpty(req.body.password)) {
        return res.status(400).json({ error: ['empty field'] });
      }
      if (req.body.password.length < 6 || req.body.password.length > 50) {
        return res.status(400).json({ error: ['Password must be between 6 and 50 characters.'] });
      }
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        return res.status(404).json({ error: ['User not found'] });
      }
      const password = await bcrypt.compare(req.body.password, user.password_hash);
      if (!password) {
        return res.status(400).json({ error: ['incorrect password'] });
      }
      const token = await jwt.sign({
        id: user.id,
        email: user.email,
      }, process.env.SECRET, {
        expiresIn: '48h',
      });
      return res.status(200).json({ token });
    } catch (e) {
      return res.status(501).json({ error: ['Error Logging In'] });
    }
  }
}

export default new HomeControllers();
