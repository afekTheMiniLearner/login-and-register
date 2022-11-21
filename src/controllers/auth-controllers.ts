import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/user-interface';
import { registerUser } from '../services/user-services';

export async function registerUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const user = {
        username: req.body.username,
        password: req.body.password,
    } as unknown as IUser;

    try {
        const status = await registerUser(user);

        res.sendStatus(status);
    } catch (e: any) {
        next(e);

        /* error can pull the server down if 
        the username already exists */
    }
}
