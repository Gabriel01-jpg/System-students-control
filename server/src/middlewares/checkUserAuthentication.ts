import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type Payload = {
    sub: string;
}

export function checkUserAuthentication(request: Request, response: Response, next: NextFunction){
    const bearer = request.headers.authorization;

    if (!bearer) {
        return response.status(401).json({
            message: "Token not found",
        })
    }

    const [, token] =  bearer?.split(' ');

    try {
        const decoded = jwt.verify(token, 'secret') as Payload;

        request.sub = decoded.sub;

        return next();
    } 
    catch(e){

        return response.status(401).json({
            message: 'Token not valid'
        })

    }



}