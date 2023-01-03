import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { isAuthMW } from '../middlewares/auth-middleware';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`User visit from:${req.originalUrl} \nmethod:${req.method}`);
    next();
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.redirect('/login');
});

router.get('/login', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(
        path.resolve(__dirname, '../..', 'client', 'htmls', 'login.html')
    );
});

router.get('/register', (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(
        path.resolve(__dirname, '../..', 'client', 'htmls', 'register.html')
    );
});

router.get(
    '/success',
    (req: Request, res: Response, next: NextFunction) => {
        res.sendFile(
            path.resolve(__dirname, '../..', 'client', 'htmls', 'success.html')
        );
    }
);

export default router;
