import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    tokenId: {
        type: String,
        required: true,
        unique: true,
    },
});

export const RefreshTokenModel = mongoose.model(
    'refreshToken',
    refreshTokenSchema
);
