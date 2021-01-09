import { Router } from 'express';
import UserControllers from '../controllers/UserControllers';
import authentication from '../middlewares/Authentication';

const routes = new Router();

routes.get('/', authentication, UserControllers.index);
routes.get('/user', authentication, UserControllers.show);
routes.post('/', authentication, UserControllers.create);
routes.put('/', authentication, UserControllers.update);
routes.delete('/', authentication, UserControllers.delete);

export default routes;
