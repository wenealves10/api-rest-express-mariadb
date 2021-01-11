import { Router } from 'express';
import multer from 'multer';
import PhotoControllers from '../controllers/PhotoControllers';
import authentication from '../middlewares/Authentication';
import multerConfig from '../config/multerConfig';

const routes = new Router();

routes.use(authentication);
routes.post('/', multer(multerConfig).single('photo'), PhotoControllers.store);

export default routes;
