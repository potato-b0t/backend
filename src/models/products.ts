import { Schema, model, Document } from "mongoose";
import { v4 as uuid } from "uuid";

const schema = new Schema({

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
        default: uuid()
    }

}, {
    versionKey: false
})

export interface IProduct extends Document {
    name: string;
    codename: string;
    price: number;
    desc: string;
    pathImage: string;
    nameImage: string;
}

export default model<IProduct>("products", schema)