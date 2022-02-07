import { Router } from "express";
import { loadImage } from "../controllers/images.controller";
const router = Router()

router.route("/:id")
.get(loadImage)

export default router