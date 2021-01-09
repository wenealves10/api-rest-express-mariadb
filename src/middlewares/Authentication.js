/* eslint-disable eqeqeq */
import 'dotenv/config';
import jwt from 'jsonwebtoken';

class Authentication {
  async auth(req, res, next) {
    const authToken = req.headers.authorization;
    if (authToken != undefined) {
      const bearer = authToken.split(' ');
      if (bearer[1] != 'undefined') {
        await jwt.verify(bearer[1], process.env.SECRET, (err, data) => {
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
