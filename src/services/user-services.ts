import { UserModel } from '../models/user-model';
import { IUser } from '../interfaces/user-interface';

export const getUserByUsername = async function (
    username: string
): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findOne({ username: username });

    return userDoc as unknown as IUser | undefined;
};
