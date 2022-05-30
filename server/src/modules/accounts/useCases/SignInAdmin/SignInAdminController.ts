import { Request, Response } from "express";
import { SignInAdminUseCase } from './SignInAdminUseCase';

export class SignInAdminController{
    async handle(request: Request, response: Response){
        const { email, password } = request.body;

        const signInAdminUseCase = new SignInAdminUseCase();

        const token = await signInAdminUseCase.execute({ email, password })

        return response.json({
            token
        })

    }
}