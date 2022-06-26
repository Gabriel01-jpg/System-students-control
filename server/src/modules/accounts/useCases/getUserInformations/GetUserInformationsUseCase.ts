import { prisma } from "../../../../database/prisma";

interface GetUserInformationsProps {
    userId: string;
}

export class GetUserInformationsUseCase{
    async execute({ userId }: GetUserInformationsProps){

        const user = await prisma.users.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                email: true,
                name: true,
                surname: true,

            }
        });

        return user;

    }
}