import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    async handle(request: Request, response: Response){
        const { name, surname, email, password } = request.body;

        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.execute({ name, email, password, surname});

        return response.json({
            user
        })
    }
}