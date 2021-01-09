import { Router } from 'express';
import homeControllers from '../controllers/HomeControllers';

const routes = new Router();

routes.post('/', homeControllers.create);

export default routes;
