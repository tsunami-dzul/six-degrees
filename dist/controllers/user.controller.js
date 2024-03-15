"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getByEmail = exports.list = void 0;
const user_service_1 = require("../services/user.service");
const list = async (req, res) => {
    try {
        const usersResponse = await (0, user_service_1.listUserService)();
        res.json({
            ok: true,
            users: usersResponse.users,
            totalDocs: usersResponse.totalDocs,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'There was an unexpected error',
        });
    }
};
exports.list = list;
const getByEmail = async (req, res) => {
    try {
        const email = req.params.email;
        const user = await (0, user_service_1.getUserByEmailService)(email);
        if (!user) {
            res.status(404).json({
                ok: false,
                message: `The user with email ${email} was not found.`,
            });
        }
        res.json({
            ok: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'There was an unexpected error',
        });
    }
};
exports.getByEmail = getByEmail;
const create = async (req, res) => {
    try {
        const { name, friends } = req.body;
        const isUSerCreated = await (0, user_service_1.createUserService)({ name, friends });
        res.json({
            ok: true,
            message: isUSerCreated ? 'User was created' : 'Something went wrong',
        });
    }
    catch (error) {
        console.error('Controller:', error);
        res.status(500).json({
            ok: false,
            message: 'There was an unexpected error',
        });
    }
};
exports.create = create;
const update = async (req, res) => {
    try {
        const { id, name, friends } = req.body;
        const userUpdated = await (0, user_service_1.updateUserService)({ id, name, friends });
        if (!userUpdated) {
            res.status(404).json({
                ok: false,
                message: `The user with the id ${id} was not found`,
            });
        }
        res.json({
            ok: true,
            user: userUpdated,
        });
    }
    catch (error) {
        console.error('Controller:', error);
        res.status(500).json({
            ok: false,
            message: 'There was an unexpected error',
        });
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const userDeleted = await (0, user_service_1.deleteUserService)(id);
        if (!userDeleted) {
            res.status(404).json({
                ok: false,
                message: `The user with the id ${id} was not found`,
            });
        }
        res.json({
            ok: true,
            message: `The user with id ${id} was deleted`,
        });
    }
    catch (error) {
        console.error('Controller:', error);
        res.status(500).json({
            ok: false,
            message: 'There was an unexpected error',
        });
    }
};
exports.remove = remove;
