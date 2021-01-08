import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// databases
import '../database';

// routes api
import homeRoutes from '../routes/home.routes';
import userRoutes from '../routes/user.routes';
import studentRoutes from '../routes/student.routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/student/', studentRoutes);
  }
}

export default new App().app;
