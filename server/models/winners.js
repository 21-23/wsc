import mongoose, { Schema } from 'mongoose';

const winner = new Schema({
    nickname: {
        type: String,
        required: true
    },
    githubnick: {
        type: String,
        required: true
    },
    time: { type: Number },
});

export default mongoose.model('winner', winner);
