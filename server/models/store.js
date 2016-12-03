import mongoose, { Schema } from 'mongoose';

const store = new Schema({
    stateStore: {},
    date: { type: Date, default: Date.now },
});

export default mongoose.model('store', store);
