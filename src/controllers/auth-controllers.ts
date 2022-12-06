import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/user-interface';
import { registerUser, loginUser } from '../services/user-services';

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

export async function loginUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const token = await loginUser(req.body.username, req.body.password);

        if (token) res.json({ token });
        else res.redirect('/login');
    } catch (e: any) {
        next(e);
        /* error can pull the server down if 
        the username already exists */
    }
}
