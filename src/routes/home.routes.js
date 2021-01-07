import { Router } from 'express';
import homeControllers from '../controllers/HomeControllers';

const routes = new Router();

routes.get('/', homeControllers.index);

export default routes;
