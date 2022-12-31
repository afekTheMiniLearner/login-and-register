import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { accessPrivateKey, refreshPrivateKey } from '../app';
import { UserModel } from '../models/user-model';
import { IUser } from '../interfaces/user-interface';

export async function getUserByUsername(
    username: string
): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findOne({ username: username });

    return userDoc as unknown as IUser | undefined;
}

export async function registerUser(user: IUser): Promise<number> {
    const userDoc = new UserModel(user);

    const result: any = await userDoc.save();

    return result ? 201 : 500;
}

export async function loginUser(
    username: string,
    password: string
): Promise<any> {
    const user = (await getUserByUsername(username)) as IUser;

    switch (true) {
        case user === null || user === undefined:
            console.log('Username not found');
            break;
        case (await bcrypt.compare(password, user.password)) === false:
            console.log("User's password incorrect");
            break;
        default:
            console.log('User login successfully');

            const accessToken = jwt.sign({ user }, accessPrivateKey, {
                expiresIn: '15s',
            });
            const refreshToken = jwt.sign(user.username, refreshPrivateKey);

            return { accessToken, refreshToken };
    }
}

export async function verifyRefreshToken(refreshToken: string): Promise<any> {
    if (!refreshToken || !refreshToken /*db*/) return false;

    jwt.verify(refreshToken, refreshPrivateKey, (err, user) => {
        if (err) return false;

        const accessToken = jwt.sign({ user }, accessPrivateKey, {
            expiresIn: '15s',
        });

        return accessToken;
    });
}
