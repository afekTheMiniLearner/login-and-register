import jwt, { VerifyOptions } from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';
import { privateKey } from '../app';

export async function isAuthMW(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const token = req.headers.authorization?.replace(
            'Bearer ',
            ''
        ) as string;
        jwt.verify(token, privateKey, { expireIn: '24h' } as VerifyOptions);
        next();
    } catch (e) {
        res.redirect('/login');
    }
}
