"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.findRelationshipDistance = exports.list = void 0;
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
const findRelationshipDistance = async (req, res) => {
    try {
        const name = req.params.name;
        const result = await (0, user_service_1.findUserRelationshipDistance)(name);
        if (!result) {
            res.status(404).json({
                ok: false,
                message: 'User not found',
            });
        }
        res.json({
            ok: true,
            message: `2nd and 3rd relationship distance of the user ${name} against the rest of the users`,
            adjencyList: result.graph,
            distances: result.distances,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'There was an unexpected error',
        });
    }
};
exports.findRelationshipDistance = findRelationshipDistance;
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
