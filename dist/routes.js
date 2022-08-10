"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controller/UserController"));
const routes = (0, express_1.Router)();
exports.routes = routes;
routes
    .post('/submit', UserController_1.default.createUser)
    .get('/findAll-users-success', UserController_1.default.findAllUsers)
    .get('/user/:email', UserController_1.default.findUser)
    .put('/update-user/:email', UserController_1.default.updateUser)
    .delete('/delete-user/:email', UserController_1.default.deleteUser);
