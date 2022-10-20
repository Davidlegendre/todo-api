"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const default_1 = __importDefault(require("./global/config/default"));
const auth_routes_1 = __importDefault(require("./auth/routes/auth.routes"));
const user_routes_1 = __importDefault(require("./auth/routes/user.routes"));
const index_routes_1 = __importDefault(require("./todos/routes/index.routes"));
const mongo_1 = __importDefault(require("./global/config/DB/mongo"));
const logger_1 = __importDefault(require("./global/utils/logger"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", auth_routes_1.default);
app.use("/user", user_routes_1.default);
app.use("/todos", index_routes_1.default);
app.get("/healthcheck", (_, res) => res.sendStatus(200));
const port = (0, default_1.default)().port;
app.listen(port, () => {
    logger_1.default.info(`server on port http://localhost:${port}`);
    logger_1.default.info('Connecting to DB, please wait');
    (0, mongo_1.default)();
});
