/* eslint-disable eqeqeq */
import 'dotenv/config';
import jwt from 'jsonwebtoken';

class Authentication {
  async auth(req, res, next) {
    const authToken = req.headers.authorization;
    if (authToken != undefined) {
      const [, token] = authToken.split(' ');
      if (token != 'undefined') {
        await jwt.verify(token, process.env.SECRET, (err, data) => {
          if (!err) {
            req.idUser = data.id;
            req.emailUser = data.email;
            next();
          } else {
            res.status(401).json({ error: ['Invalid Token'] });
          }
        });
      } else {
        res.status(401).json({ error: ['No Token'] });
      }
    } else {
      res.status(401).json({ error: ['No Token'] });
    }
  }
}

export default new Authentication().auth;
