import { Users } from "@prisma/client";
import { prisma } from "../../../../database/prisma";
import { hash } from 'bcrypt';

interface UserProps {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export class CreateUserUseCase{
    async execute({ name, surname, email, password}: UserProps): Promise<Users | undefined>{
        // verifico se usuário já não existe
        const userExist = await prisma.users.findUnique({
            where: {
                email
            }
        })

        if(userExist){
            throw new Error('Usuário já existe');
        }

        // criptografo a senha
        const hasPassword = await hash(password, 10);
        // crio usuário

        const user = await prisma.users.create({
            data: {
                email, 
                name,
                surname,
                password: hasPassword
            }
        })

        return user;

    }
}