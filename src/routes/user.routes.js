import { Router } from 'express';
import UserControllers from '../controllers/UserControllers';

const routes = new Router();

routes.get('/', UserControllers.index);
routes.get('/:id', UserControllers.show);
routes.post('/', UserControllers.create);
routes.put('/:id', UserControllers.update);
routes.delete('/:id', UserControllers.delete);

export default routes;
