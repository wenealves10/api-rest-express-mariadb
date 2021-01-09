import { Router } from 'express';
import StudentControllers from '../controllers/StudentControllers';
import authentication from '../middlewares/Authentication';

const routes = new Router();

routes.post('/', authentication, StudentControllers.create);

export default routes;
