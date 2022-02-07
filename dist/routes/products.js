"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../libs/multer"));
const products_controller_1 = require("../controllers/products.controller");
const router = (0, express_1.Router)();
//controllers
router.route("/")
    .get(products_controller_1.getProducts);
router.route("/:id")
    .get(products_controller_1.getProduct);
router.route("/add/")
    .post(multer_1.default.single("image"), products_controller_1.addProduct);
exports.default = router;
