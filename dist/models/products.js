"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const schema = new mongoose_1.Schema({
    name: {
        type: String,
        default: "",
        required: true
    },
    codename: {
        type: String
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    desc: {
        type: String,
        default: "",
        required: true
    },
    nameImage: {
        type: String,
        default: "",
        required: true
    },
    id: {
        type: String,
        default: (0, uuid_1.v4)()
    }
}, {
    versionKey: false
});
exports.default = (0, mongoose_1.model)("products", schema);
