import express, {
    ErrorRequestHandler,
    Request,
    Response,
    NextFunction,
} from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';

import './config/passport-config';
import { connectDB } from './DB/mongoose';
import mainRouter from './routers/main-router';
import authRouter from './routers/auth-router';

connectDB('mongodb://127.0.0.1:27017/login-and-register');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        secret: '@uthent1c@teY0ur$elf',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', mainRouter);
app.use('/auth', authRouter);

app.use(
    (
        err: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        console.log(`Error occured: \n${err}`);
        next(err);
    }
);

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});

export default app;
