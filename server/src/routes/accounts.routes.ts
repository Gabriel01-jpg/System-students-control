import { CreateCourseController } from '../modules/courses/useCases/createCourse/createCourseController';
import { Router } from "express";
import { SignInAdminController } from '../modules/accounts/useCases/SignInAdmin/SignInAdminController';
import { GetUserInformationsController } from '../modules/accounts/useCases/getUserInformations/GetUserInformationsController';
import { checkUserAuthentication } from '../middlewares/checkUserAuthentication';

const accountsRoutes = Router();

const signInAdminController = new SignInAdminController();
const getUserInformationsController = new GetUserInformationsController();

accountsRoutes.post('/admin', signInAdminController.handle);
accountsRoutes.get('/me', checkUserAuthentication, getUserInformationsController.handle);

export { accountsRoutes }