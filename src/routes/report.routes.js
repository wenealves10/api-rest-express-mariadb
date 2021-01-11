import { Router } from 'express';
import ReportControllers from '../controllers/ReportControllers';
import authentication from '../middlewares/Authentication';

const routes = new Router();

routes.use(authentication);
routes.get('/', ReportControllers.index);
routes.get('/student/:id', ReportControllers.show);
routes.post('/student/:id', ReportControllers.create);

export default routes;
