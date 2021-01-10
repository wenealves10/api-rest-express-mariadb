import { Router } from 'express';
import StudentControllers from '../controllers/StudentControllers';
import authentication from '../middlewares/Authentication';

const routes = new Router();

routes.get('/', authentication, StudentControllers.index);
routes.get('/:id', authentication, StudentControllers.show);
routes.post('/', authentication, StudentControllers.create);
routes.put('/:id', authentication, StudentControllers.update);
routes.delete('/:id', authentication, StudentControllers.delete);

export default routes;
