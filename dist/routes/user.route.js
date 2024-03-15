"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const routerUser = (0, express_1.Router)();
routerUser.get('/', user_controller_1.list);
routerUser.get('/:email', user_controller_1.getByEmail);
routerUser.post('/', user_controller_1.create);
routerUser.put('/', user_controller_1.update);
routerUser.delete('/:email', user_controller_1.remove);
exports.default = routerUser;