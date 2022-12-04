import { Request, Response, NextFunction } from 'express';

export async function isAuthMW(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    if (req.isAuthenticated()) next();
    else {
        res.redirect('/login');
    }
}
