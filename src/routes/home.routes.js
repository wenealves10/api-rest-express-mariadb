import { Router } from 'express';
import homeControllers from '../controllers/HomeControllers';

const routes = new Router();

routes.get('/', homeControllers);

export default routes;
