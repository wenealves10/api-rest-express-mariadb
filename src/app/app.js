import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';

// databases
import '../database';

// routes api
import homeRoutes from '../routes/home.routes';
import userRoutes from '../routes/user.routes';
import studentRoutes from '../routes/student.routes';
import reportRoutes from '../routes/report.routes';
import tokenRoutes from '../routes/token.routes';
import recoverPasswordRoutes from '../routes/recover.password.routes';
import photoRoutes from '../routes/photo.routes';

// Cors Options
const whiteList = [
  process.env.URL_EXT,
  process.env.URL_INT,
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed By Cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.static(resolve(__dirname, '..', '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/student/', studentRoutes);
    this.app.use('/photo/student', photoRoutes);
    this.app.use('/report/', reportRoutes);
    this.app.use('/auth/token/', tokenRoutes);
    this.app.use('/auth/forget_password', recoverPasswordRoutes);
  }
}

export default new App().app;
