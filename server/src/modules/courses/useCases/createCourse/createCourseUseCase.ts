import { Courses } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

interface CourseProps {
    course: string;
    pricing: string;
    type: string;
}

export class CreateCourseUseCase{
    async execute({ course, pricing, type}: CourseProps): Promise<Courses>{
        const response = await prisma.courses.create({
            data: {
                name: course,
                tipo_curso: type,
                valor_mensalidade: pricing,
            }
        })

        return response;

    }
}