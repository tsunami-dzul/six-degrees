"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserByEmailService = exports.listUserService = void 0;
const user_data_access_1 = require("../data-access/user.data-access");
const listUserService = async () => {
    try {
        const userList = await (0, user_data_access_1.listUser)();
        return userList;
    }
    catch (error) {
        console.error('Service: ', error);
        throw error;
    }
};
exports.listUserService = listUserService;
const getUserByEmailService = async (email) => {
    try {
        const user = await (0, user_data_access_1.getUserByEmail)(email);
        return user;
    }
    catch (error) {
        console.error('Service: ', error);
        throw error;
    }
};
exports.getUserByEmailService = getUserByEmailService;
const createUserService = async (user) => {
    try {
        const isUserCreated = await (0, user_data_access_1.createUser)(user);
        return isUserCreated;
    }
    catch (error) {
        console.error('Service: ', error);
        throw error;
    }
};
exports.createUserService = createUserService;
const updateUserService = async (user) => {
    try {
        const userUpdated = await (0, user_data_access_1.updateUser)(user);
        return userUpdated;
    }
    catch (error) {
        console.error('Service: ', error);
        throw error;
    }
};
exports.updateUserService = updateUserService;
const deleteUserService = async (id) => {
    try {
        const userDeleted = await (0, user_data_access_1.deleteUser)(id);
        return userDeleted;
    }
    catch (error) {
        console.error('Service: ', error);
        throw error;
    }
};
exports.deleteUserService = deleteUserService;
