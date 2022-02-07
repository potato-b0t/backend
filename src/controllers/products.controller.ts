import { Request, Response } from "express";
import products, {IProduct} from "../models/products";


export async function getProducts(req: Request, res: Response): Promise<Response> {

    try {

        const Products: IProduct[] = await products.find()

        const ProductsList = {
            
        }

        console.log(Products)

        if (Products.length != 0) {

            return res.json(Products)
        }
        else {

            return res.json({
                code: 304
            })
        }

    } catch (err) {

        return res.json({
            code: 405,
            error: err
        })

    }

}

export async function getProduct(req: Request, res: Response): Promise<Response> {

    const id = req.params.id

    try {

        const product = await products.findOne({ id: id })

        if (product != null) {
            return res.json({
                code: 200,
                product
            })
        } else {
            return res.json({
                code: 304,
                message: "not found that product"
            })
        }

    } catch (err) {

        return res.json({
            code: 405,
            error: err
        })

    }

}

export async function addProduct(req: Request, res: Response): Promise<Response> {
    
    try {

        const { name, price, desc, codename } = req.body

        const newProduct = {
            name,
            price,
            desc,
            codename,
            pathImage: req.file?.path,
            nameImage: req.file?.filename
        }

        const productSaved = new products(newProduct)

        await productSaved.save()

        return res.json({
            code: 200,
            productSaved
        })

    } catch (err) {
        console.log(err)
        return res.json({
            code: 405,
            error: err
        })
    }

}