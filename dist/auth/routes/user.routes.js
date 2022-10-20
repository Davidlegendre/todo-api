"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateHelperZod_1 = __importDefault(require("../../global/helpers/validateHelperZod"));
const user_controller_1 = require("../controllers/user.controller");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
//
router.post("/createUser", (0, validateHelperZod_1.default)(user_validator_1.createUserValidate), user_controller_1.createUserController);
exports.default = router;
