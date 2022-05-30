import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import "express-async-errors";
import { coursesRoutes } from './src/routes/courses.routes';
import { usersRoutes } from './src/routes/users.routes';
import { accountsRoutes } from './src/routes/accounts.routes';

const app = express();

app.use(cors())
app.use(express.json());

app.use('/courses', coursesRoutes)
app.use('/users', usersRoutes)
app.use('/accounts', accountsRoutes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(process.env.PORT || 3333, () => console.log('Server is running at http://localhost:3333'))