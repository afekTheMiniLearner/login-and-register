import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

import {
    registerUserCtrl,
    loginUserCtrl,
} from '../controllers/auth-controllers';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`User visit from:${req.originalUrl} \n method:${req.method}`);
    next();
});

router.post('/login', loginUserCtrl);

router.post('/register', registerUserCtrl);

/*
router.post('/logout', (req: Request, res: Response, next: NextFunction) => {
    //change to jwt
    req.logout((err) => {
        if (err) return next(err);
        else
            res.sendFile(
                path.resolve(
                    __dirname,
                    '../..',
                    'client',
                    'htmls',
                    'login.html'
                )
            );
    });
});*/

export default router;
