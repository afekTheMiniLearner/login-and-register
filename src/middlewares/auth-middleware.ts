import jwt, { VerifyOptions } from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';
import { accessPrivateKey,refreshPrivateKey } from '../app';

export async function isAuthMW(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const accessToken = req.headers.authorization?.replace(
            'Bearer ',
            ''
        ) as string;
        
        jwt.verify(accessToken, accessPrivateKey, { expireIn: '24h' } as VerifyOptions);
        next();
    } catch (e) {
        res.redirect('/login');
    }
}
