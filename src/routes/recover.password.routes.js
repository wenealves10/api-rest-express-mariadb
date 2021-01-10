import { Router } from 'express';
import RecoverPasswordControllers from '../controllers/RecoverPasswordControllers';

const routes = new Router();

routes.post('/', RecoverPasswordControllers.create);
routes.post('/reset_password', RecoverPasswordControllers.update);

export default routes;
