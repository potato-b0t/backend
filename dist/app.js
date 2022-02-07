"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//routes imports
const products_1 = __importDefault(require("./routes/products"));
const images_1 = __importDefault(require("./routes/images"));
//settings
app.set("port", 5000);
//middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//routes
app.use("/api/products/", products_1.default);
app.use("/api/images/", images_1.default);
exports.default = app;
