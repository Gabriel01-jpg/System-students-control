import { Request, Response } from "express";
import { CreateCourseUseCase } from "./createCourseUseCase";

export class CreateCourseController{
    async handle(request: Request, response: Response){
        const { course, pricing, type } = request.body;
        const createCourseUseCase = new CreateCourseUseCase();
        const courseCreated = await createCourseUseCase.execute({ course, pricing, type });

        response.json({
            courseCreated
        })
    }
}