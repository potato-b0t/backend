import { Request, Response } from "express";
import path from "path"
import products from "../models/products"

export async function loadImage(req: Request, res: Response) {
    const id = req.params.id

    try {

        const product = await products.findOne({id})

        if(product){
            res.sendFile(path.join(__dirname, `../../public/products/${product.nameImage}`))
        } else {
            res.json({
                code: 304
            })
        }

    } catch (err) {
        res.json({
            code: 405, 
            err
        })
    }
}