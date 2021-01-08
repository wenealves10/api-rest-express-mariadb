import { Router } from 'express';
import StudentControllers from '../controllers/StudentControllers';

const routes = new Router();

routes.post('/', StudentControllers.create);

export default routes;
