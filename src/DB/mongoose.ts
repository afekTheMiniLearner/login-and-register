import mongoose from 'mongoose';

export async function connectDB(url: string) {
    await mongoose
        .connect(url)
        .then(() => {
            console.log('Connected to DB');
        })
        .catch((err) => {
            console.log('Connection to the DB failed');
            throw err;
        });
}
