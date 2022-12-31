import express, { Request, Response, NextFunction } from 'express';

import {
    registerUserCtrl,
    loginUserCtrl,
    verifyRefreshTokenCtrl,
} from '../controllers/auth-controllers';
import { isAuthMW } from '../middlewares/auth-middleware';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`User visit from:${req.originalUrl} \n method:${req.method}`);
    next();
});

router.post('/login', loginUserCtrl);

router.post('/register', registerUserCtrl);

router.get('/user-authenticated', isAuthMW, (req: Request, res: Response) => {
    res.sendStatus(200);
});

router.post('/token', verifyRefreshTokenCtrl);

/*
router.post('/logout', (req: Request, res: Response, next: NextFunction) => {

});*/

export default router;
