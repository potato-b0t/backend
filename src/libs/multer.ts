import multer from "multer";
import { v4 } from "uuid"
import path from "path"

const storage = multer.diskStorage({
    destination: "public/products",
})

export default multer({storage})