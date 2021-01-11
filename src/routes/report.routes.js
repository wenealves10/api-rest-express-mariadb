import { Router } from 'express';
import ReportControllers from '../controllers/ReportControllers';
import authentication from '../middlewares/Authentication';

const routes = new Router();

routes.use(authentication);
routes.get('/student/:id', ReportControllers.index);
routes.post('/student/:id', ReportControllers.create);
routes.put('/:idMatter/student/:id', ReportControllers.update);
routes.delete('/:idMatter/student/:id', ReportControllers.delete);

export default routes;
