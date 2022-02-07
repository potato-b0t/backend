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
exports.loadImage = void 0;
const path_1 = __importDefault(require("path"));
const products_1 = __importDefault(require("../models/products"));
function loadImage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const product = yield products_1.default.findOne({ id });
            if (product) {
                res.sendFile(path_1.default.join(__dirname, `../../public/products/${product.nameImage}`));
            }
            else {
                res.json({
                    code: 304
                });
            }
        }
        catch (err) {
            res.json({
                code: 405,
                err
            });
        }
    });
}
exports.loadImage = loadImage;
