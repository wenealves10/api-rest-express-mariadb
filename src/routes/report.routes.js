import { Router } from 'express';
import ReportControllers from '../controllers/ReportControllers';

const routes = new Router();

routes.post('/', ReportControllers.create);

export default routes;
