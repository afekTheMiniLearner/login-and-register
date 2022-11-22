import { Request, Response, NextFunction } from 'express';
const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

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
