import { Request, Response } from "express";

export class GetUserInformationsController{
    async handle(request: Request, response: Response){
        const user = request.sub;

        /* return response.json({
            token
        }) */

    }
}