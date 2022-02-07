"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getProduct = exports.getProducts = void 0;
const products_1 = __importDefault(require("../models/products"));
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const Products = yield products_1.default.find();
            const ProductsList = {};
            console.log(Products);
            if (Products.length != 0) {
                return res.json(Products);
            }
            else {
                return res.json({
                    code: 304
                });
            }
        }
        catch (err) {
            return res.json({
                code: 405,
                error: err
            });
        }
    });
}
exports.getProducts = getProducts;
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const product = yield products_1.default.findOne({ id: id });
            if (product != null) {
                return res.json({
                    code: 200,
                    product
                });
            }
            else {
                return res.json({
                    code: 304,
                    message: "not found that product"
                });
            }
        }
        catch (err) {
            return res.json({
                code: 405,
                error: err
            });
        }
    });
}
exports.getProduct = getProduct;
function addProduct(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, price, desc, codename } = req.body;
            const newProduct = {
                name,
                price,
                desc,
                codename,
                pathImage: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path,
                nameImage: (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename
            };
            const productSaved = new products_1.default(newProduct);
            yield productSaved.save();
            return res.json({
                code: 200,
                productSaved
            });
        }
        catch (err) {
            console.log(err);
            return res.json({
                code: 405,
                error: err
            });
        }
    });
}
exports.addProduct = addProduct;
