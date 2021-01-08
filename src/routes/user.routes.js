import { Router } from 'express';
import UserControllers from '../controllers/UserControllers';

const routes = new Router();

routes.post('/', UserControllers.create);

export default routes;
