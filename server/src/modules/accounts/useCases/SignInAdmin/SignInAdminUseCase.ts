import { prisma } from "../../../../database/prisma";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken'

interface SignInProps {
    email: string;
    password: string;
}

type Token = string;

export class SignInAdminUseCase{
    async execute({ email, password}: SignInProps): Promise<Token | undefined>{

        const user = await prisma.users.findFirst({
            where: {
                email
            }
        })

        if(!user){
            throw new Error('Usuário ou senha inválida!');
        }
        const passwordMatch = await compare(password, user.password);
        console.log(passwordMatch);
        if(!passwordMatch){
            throw new Error('Usuário ou senha inválida!')
        }

        const token = sign({
            email: user.email,
            name: user.name,
            surname: user.surname,
        }, "secret", { subject: user.id, expiresIn: "1d"})
        
        return token;

    }
}