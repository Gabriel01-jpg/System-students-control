import { prisma } from "../../../../database/prisma";

interface GetUserInformationsProps {
    userId: string;
}

type Token = string;

export class GetUserInformationsUseCase{
    async execute({ userId }: GetUserInformationsProps){

        const user = await prisma.users.findFirst({
            where: {
                id: userId
            }
        });

        return user;

    }
}