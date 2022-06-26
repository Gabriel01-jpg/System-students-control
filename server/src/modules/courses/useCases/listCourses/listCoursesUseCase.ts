import { Courses } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

interface CourseProps {
    course: string;
    pricing: string;
    type: string;
}

export class ListCoursesUseCase {
    async execute(): Promise<Courses[]>{
        const response = await prisma.courses.findMany();
        
        return response;

    }
}