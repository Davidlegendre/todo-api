"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = __importDefault(require("./global/config/DB/mongo"));
const app_1 = __importDefault(require("./app"));
const default_1 = __importDefault(require("./global/config/default"));
const logger_1 = __importDefault(require("./global/utils/logger"));
const port = (0, default_1.default)().port;
app_1.default.listen(port, () => {
    logger_1.default.info(`server on port http://localhost:${port}`);
    logger_1.default.info('Connecting to DB, please wait');
    (0, mongo_1.default)();
});