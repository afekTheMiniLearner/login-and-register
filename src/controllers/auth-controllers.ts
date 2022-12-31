import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces/user-interface';
import {
    registerUser,
    loginUser,
    verifyRefreshToken,
} from '../services/user-services';

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
        next(e); // can crash the server if username already exists
    }
}

export async function loginUserCtrl(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { accessToken, refreshToken } = await loginUser(
            req.body.username,
            req.body.password
        );

        if (accessToken) res.json({ accessToken, refreshToken });
        else res.redirect('/login');
    } catch (e: any) {
        next(e); // can crash the server if username already exists
    }
}

export async function verifyRefreshTokenCtrl(req: Request, res: Response) {
    const accessToken = await verifyRefreshToken(req.body.token);

    if (!accessToken) res.sendStatus(400);
    else res.json({ accessToken });
}
