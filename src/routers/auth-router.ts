import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import { registerUserCtrl } from '../controllers/auth-controllers';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`User visit from:${req.originalUrl} \n method:${req.method}`);
    next();
});

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/success',
        failureRedirect: '/login',
    })
);

router.post('/register', registerUserCtrl);

router.post('/logout', (req: Request, res: Response, next: NextFunction) => {
    req.logout((err) => {
        if (err) return next(err);
        else res.redirect('/login');
    });
});

export default router;
