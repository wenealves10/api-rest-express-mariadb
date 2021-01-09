import { Router } from 'express';
import RecoverPasswordControllers from '../controllers/RecoverPasswordControllers';

const routes = new Router();

routes.post('/', RecoverPasswordControllers.create);

export default routes;
