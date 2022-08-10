"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const port = process.env.SERVER_PORT || 4000;
const app = (0, express_1.default)();
app
    .use(express_1.default.json())
    .use((0, cors_1.default)())
    .use(routes_1.routes)
    .listen(port, () => {
    console.log(`Server is runing on port: ** http://localhost:${port}`);
});
