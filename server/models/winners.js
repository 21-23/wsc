import mongoose, { Schema } from 'mongoose';

const winner = new Schema({
    nickname: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    time: { type: Number },
});

export default mongoose.model('winner', winner);
