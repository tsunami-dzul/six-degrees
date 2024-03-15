"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const dbConnection_1 = require("./db/dbConnection");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', user_route_1.default);
app.listen(PORT, async () => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
        await (0, dbConnection_1.dbConnection)();
    }
    catch (error) {
        console.log(error);
    }
});
