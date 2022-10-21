"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const log = (msn, isError) => {
    const date = `${(0, dayjs_1.default)().format()}`;
    if (!isError)
        console.log(`[${date}] ` + msn);
    else
        console.error(`[${date}] ` + msn);
};
exports.default = log;
