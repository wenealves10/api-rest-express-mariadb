import { Router } from 'express';
import ReportControllers from '../controllers/ReportControllers';
import authentication from '../middlewares/Authentication';

const routes = new Router();

routes.post('/', authentication, ReportControllers.create);

export default routes;
