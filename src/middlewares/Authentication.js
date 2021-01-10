/* eslint-disable eqeqeq */
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class Authentication {
  async auth(req, res, next) {
    try {
      const authToken = req.headers.authorization;
      if (authToken != undefined) {
        const [bearer, token] = authToken.split(' ');
        if (!/^Bearer$/i.test(bearer)) {
          return res.status(401).json({ error: ['Unexpected error token'] });
        }
        if (token != 'undefined') {
          const data = jwt.verify(token, process.env.SECRET);
          const { id, email } = data;
          const user = await User.findOne({ where: { email } });
          if (!user) {
            return res.status(401).json({ error: ['Not found User'] });
          }
          req.idUser = id;
          req.emailUser = email;
          return next();
        }
        return res.status(401).json({ error: ['No Token'] });
      }
      return res.status(401).json({ error: ['No Token'] });
    } catch (e) {
      return res.status(401).json({ error: ['Unexpected error Token'] });
    }
  }
}

export default new Authentication().auth;
