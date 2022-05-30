import { CreateCourseController } from '../modules/courses/useCases/createCourse/createCourseController';
import { Router } from "express";

const coursesRoutes = Router();

const createCourseController = new CreateCourseController();

coursesRoutes.post('/', createCourseController.handle);

export { coursesRoutes }