/* eslint-disable eqeqeq */
import 'dotenv/config';
import validate from 'validator';
import crypto from 'crypto';
import User from '../models/User';
import mailer from '../modules/mailer';

class RecoverPasswordControllers {
  async create(req, res) {
    try {
      const { email } = req.body;
      if (!validate.isEmail(email)) return res.status(400).json({ error: ['Email invalid'] });
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ error: ['Not Found User'] });
      const token = crypto.randomBytes(20).toString('hex');
      const now = new Date();
      now.setHours(now.getHours() + 1);
      user.password_reset_token = token;
      user.password_reset_expires = now;
      await user.save({ fields: ['password_reset_token', 'password_reset_expires'] });
      mailer.sendMail({
        to: email,
        from: process.env.EMAIL_SEND,
        html: `<p> Did you forget your password? No problem, use this code here to get them back: <b>${token}</b></p>`,
      }, (err) => {
        if (err) return res.status(400).json({ error: ['Error sending email', err] });
        return res.status(200).json({ status: ['Code sent in email'] });
      });
    } catch (e) {
      return res.status(501).json({ error: ['Internal error'] });
    }
  }

  async update(req, res) {
    try {
      const { email, token, password } = req.body;
      if (!validate.isEmail(email)) return res.status(400).json({ error: ['Email invalid'] });
      if (!token) return res.status(400).json({ error: ['Token Invalid'] });
      if (password.length < 6 || password.length > 50) return res.status(400).json({ error: ['Password must be between 6 and 50 characters.'] });
      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(404).json({ error: ['User not found'] });
      if (user.password_reset_token !== token) return res.status(400).json({ error: ['Token invalid'] });
      const now = new Date();
      if (now > user.password_reset_expires) return res.status(400).json({ error: ['Token expired'] });
      user.password = password;
      user.password_reset_token = null;
      user.password_reset_expires = null;
      await user.save();
      return res.status(200).json({ status: ['Recovered account'] });
    } catch (e) {
      return res.status(501).json({ error: ['Internal error'] });
    }
  }
}

export default new RecoverPasswordControllers();
