import { Courses } from "@prisma/client";
import { prisma } from "../../../../database/prisma";

interface DeleteCourseUseCaseProps {
    id: string;
}

export class DeleteCourseUseCase {
    async execute({ id } : DeleteCourseUseCaseProps): Promise<Courses>{
        const response = await prisma.courses.delete({
            where: {
                id
            }
        })

        return response;
    }
}