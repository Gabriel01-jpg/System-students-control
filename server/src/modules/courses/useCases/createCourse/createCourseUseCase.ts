import { Courses } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

interface CourseProps {
    course: string;
    price: string;
    type: string;
}

export class CreateCourseUseCase{
    async execute({ course, price, type}: CourseProps): Promise<Courses>{
        const response = await prisma.courses.create({
            data: {
                name: course,
                tipo_curso: type,
                valor_mensalidade: price,
            }
        })

        return response;

    }
}