import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { IUser, passportConfigUser } from '../interfaces/user-interface';
import { getUserByUsername } from '../services/user-services';
import { UserModel } from '../models/user-model';
const badRequestMessage = 'username or password incorrect';

passport.use(
    new LocalStrategy(async (username, password, done) => {
        const user: IUser | undefined = await getUserByUsername(username);

        if (!user) {
            console.log('Username not found');
            return done(badRequestMessage, null);
        }

        const isMatchedPassword = await bcrypt.compare(password, user.password);

        if (!isMatchedPassword) {
            console.log("User's password incorrect");
            return done(badRequestMessage, null);
        }

        console.log('User login successfully');
        done(null, user);
    })
);

passport.serializeUser((user: passportConfigUser | null, done: Function) => {
    done(null, user?._id);
});

passport.deserializeUser(async (id: string, done: Function) => {
    const user = await UserModel.findById(id);

    if (!user) done('user not found', null);
    else done(null, user);
});
