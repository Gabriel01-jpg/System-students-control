import { Request, Response } from "express";
import { DeleteCourseUseCase } from "./DeleteCourseUseCase";

export class DeleteCourseController{
    async handle(request: Request, response: Response): Promise<Response>{

        const { id } = request.params;

        console.log(id);

        if(!id){
            throw new Error('ID NÃO INFORMADO')
        }

        const deleteCourseUseCase = new DeleteCourseUseCase();

        const deletedCourse = await deleteCourseUseCase.execute({ id });

        return response.json({
            deletedCourse
        })

    }
}