import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const router = express.Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`User visit from:${req.originalUrl} \nmethod:${req.method}`);
    next();
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    //res.sendFile(path.resolve(__dirname, '../..', 'client', 'htmls', 'home.html'));
});

export default router;
