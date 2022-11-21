import { Request, Response, NextFunction } from 'express';
const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function isAuthMW(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    if (req.isAuthenticated()) next();
    else {
        alert('You must login order to complete this operation');
        await timeout(2000);
        res.status(401).redirect('/login');
    }
}
