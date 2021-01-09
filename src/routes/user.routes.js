import { Router } from 'express';
import UserControllers from '../controllers/UserControllers';
import authentication from '../middlewares/Authentication';

const routes = new Router();

routes.get('/', authentication, UserControllers.index);
routes.get('/:id', authentication, UserControllers.show);
routes.post('/', authentication, UserControllers.create);
routes.put('/:id', authentication, UserControllers.update);
routes.delete('/:id', authentication, UserControllers.delete);

export default routes;
