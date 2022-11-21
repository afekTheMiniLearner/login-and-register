import { UserModel } from '../models/user-model';
import { IUser } from '../interfaces/user-interface';

export async function getUserByUsername(
    username: string
): Promise<IUser | undefined> {
    const userDoc: any = await UserModel.findOne({ username: username });

    return userDoc as unknown as IUser | undefined;
}

export async function registerUser(user: IUser) {
    const userDoc = new UserModel(user);

    const result: any = await userDoc.save();

    return result ? 201 : 500;
}
