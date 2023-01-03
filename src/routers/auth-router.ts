import express, { Request, Response, NextFunction } from 'express';

import {
    registerUserCtrl,
    loginUserCtrl,
    logoutUserCtrl,
} from '../controllers/auth-controllers';
import { isAuthMW } from '../middlewares/auth-middleware';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`User visit from:${req.originalUrl} \n method:${req.method}`);
    next();
});

router.post('/register', registerUserCtrl);

router.post('/login', loginUserCtrl);

router.get('/logout', logoutUserCtrl);

router.get('/user-authenticated', isAuthMW, (req: Request, res: Response) => {
    res.sendStatus(200);
});

export default router;
