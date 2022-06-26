import { ListCoursesController } from '../modules/courses/useCases/listCourses/listCoursesController';
import { CreateCourseController } from '../modules/courses/useCases/createCourse/createCourseController';
import { Router } from "express";
import { DeleteCourseController } from '../modules/courses/useCases/deleteCourse/DeleteCourseController';
import { checkUserAuthentication } from '../middlewares/checkUserAuthentication';

const coursesRoutes = Router();

const createCourseController = new CreateCourseController();
const listCoursesController = new ListCoursesController();
const deleteCourseController = new DeleteCourseController();

coursesRoutes.get('/', checkUserAuthentication, listCoursesController.handle);

coursesRoutes.post('/', checkUserAuthentication, createCourseController.handle);

coursesRoutes.delete('/:id', checkUserAuthentication, deleteCourseController.handle);

export { coursesRoutes }