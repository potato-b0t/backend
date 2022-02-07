import { Router } from "express";
import multer from "../libs/multer";
import { addProduct, getProduct, getProducts } from "../controllers/products.controller";
const router = Router();

//controllers

router.route("/")
.get(getProducts)

router.route("/:id")
.get(getProduct)


router.route("/add/")
.post(multer.single("image"), addProduct)

export default router