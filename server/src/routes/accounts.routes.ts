import { CreateCourseController } from '../modules/courses/useCases/createCourse/createCourseController';
import { Router } from "express";
import { SignInAdminController } from '../modules/accounts/useCases/SignInAdmin/SignInAdminController';

const accountsRoutes = Router();

const signInAdminController = new SignInAdminController();

accountsRoutes.post('/admin', signInAdminController.handle);
accountsRoutes.get('/me', signInAdminController.handle);

export { accountsRoutes }