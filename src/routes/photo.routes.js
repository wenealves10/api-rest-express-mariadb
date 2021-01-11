import { Router } from 'express';
import multer from 'multer';
import PhotoControllers from '../controllers/PhotoControllers';
import authentication from '../middlewares/Authentication';
import multerConfig from '../config/multerConfig';
import HandlingError from '../middlewares/HandlingError';

const routes = new Router();

routes.use(authentication);
routes.post('/:id', multer(multerConfig).single('photo'), HandlingError, PhotoControllers.store);

export default routes;
