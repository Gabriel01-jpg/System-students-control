import { CreateUserController } from './../modules/users/useCases/createUsers/CreateUserController';
import { CreateCourseController } from '../modules/courses/useCases/createCourse/createCourseController';
import { Router } from "express";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes }