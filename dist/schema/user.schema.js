"use strict";
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
    },
    friends: {
        type: [String],
        default: [],
    },
});
userSchema.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    object.id = object._id;
    delete object._id;
    return object;
});
module.exports = (0, mongoose_1.model)('User', userSchema);
