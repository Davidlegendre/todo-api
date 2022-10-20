"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
/* import mongoConnect from "./global/config/DB/mongo";
import localConfig from "./global/config/default";
import log from './global/utils/logger'; */
const auth_routes_1 = __importDefault(require("./auth/routes/auth.routes"));
const user_routes_1 = __importDefault(require("./auth/routes/user.routes"));
const index_routes_1 = __importDefault(require("./todos/routes/index.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", auth_routes_1.default);
app.use("/user", user_routes_1.default);
app.use("/todos", index_routes_1.default);
app.get("/healthcheck", (_, res) => res.sendStatus(200));
/* const port = localConfig().port
app.listen(port, () => {
    log(`server on port http://localhost:${port}`, false)
    log('Connecting to DB, please wait', false)
    mongoConnect()
}) */
exports.default = app;
