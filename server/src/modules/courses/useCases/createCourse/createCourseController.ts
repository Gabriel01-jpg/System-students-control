import { Request, Response } from "express";
import { CreateCourseUseCase } from "./createCourseUseCase";

export class CreateCourseController{
    async handle(request: Request, response: Response){
        const { course, price, type } = request.body;

        const createCourseUseCase = new CreateCourseUseCase();

        const courseCreated = await createCourseUseCase.execute({ course, price, type });

        response.json({
            courseCreated
        })
    }
}