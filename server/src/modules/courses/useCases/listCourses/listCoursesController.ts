import { Request, Response } from "express";
import { ListCoursesUseCase } from "./listCoursesUseCase";
import { Courses } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

export class ListCoursesController{
    async handle(request: Request, response: Response): Promise<Response> {
        const listCoursesUseCase = new ListCoursesUseCase();

        const courses = await listCoursesUseCase.execute();

        return response.json({
            courses
        })

    }
}