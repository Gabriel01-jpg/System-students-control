import { Request, Response } from "express";
import { GetUserInformationsUseCase } from "./GetUserInformationsUseCase";

export class GetUserInformationsController{
    async handle(request: Request, response: Response){
        const userId = request.sub;

        const getUserInformationsUseCase = new GetUserInformationsUseCase();
        const user = await getUserInformationsUseCase.execute({ userId })

        return response.json({
            user
        })

    }
}