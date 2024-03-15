"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.listUser = void 0;
const user_schema_1 = __importDefault(require("../schema/user.schema"));
const listUser = async () => {
    try {
        const users = await user_schema_1.default.find({}, { password: 0 });
        const totalDocs = await user_schema_1.default.countDocuments();
        const response = {
            users,
            totalDocs,
        };
        return response;
    }
    catch (error) {
        console.error('DTO:', error);
        throw error;
    }
};
exports.listUser = listUser;
const createUser = async (user) => {
    try {
        const newUser = new user_schema_1.default(user);
        await newUser.save();
        return true;
    }
    catch (error) {
        console.error('DTO:', error);
        throw error;
    }
};
exports.createUser = createUser;
const updateUser = async (user) => {
    try {
        const userUpdated = await user_schema_1.default.findByIdAndUpdate(user.id, user, { new: true });
        if (!userUpdated) {
            return null;
        }
        const response = {
            id: userUpdated.id,
            name: userUpdated.name,
            friends: userUpdated.friends,
        };
        return response;
    }
    catch (error) {
        console.error('DTO:', error);
        throw error;
    }
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    try {
        const userDeleted = await user_schema_1.default.findByIdAndDelete(id);
        if (!userDeleted) {
            return false;
        }
        return true;
    }
    catch (error) {
        console.error('DTO:', error);
        throw error;
    }
};
exports.deleteUser = deleteUser;
