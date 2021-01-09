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
      await user.update({
        password_reset_token: token,
        password_reset_expires: now,
      });
      mailer.sendMail({
        to: email,
        from: 'wene.alves@acad.ifma.edu.br',
        html: `<p> Did you forget your password? No problem, use this code here to get them back: <b>${token}</b></p>`,
      }, (err) => {
        if (err) return res.status(400).json({ error: ['Error sending email', err] });
        return res.status(200).json({ status: ['Code sent in email'] });
      });
    } catch (e) {
      return res.status(501).json({ error: ['Internal error'] });
    }
  }
}

export default new RecoverPasswordControllers();
