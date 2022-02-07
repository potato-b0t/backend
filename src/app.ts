import Express  from "express";
import morgan from "morgan";
import cors from "cors"
 
const app = Express()

//routes imports
import products from "./routes/products"
import images from "./routes/images"

//settings
app.set("port", 5000)


//middlewares
app.use(cors())
app.use(morgan("combined"))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))

//routes
app.use("/api/products/", products)
app.use("/api/images/", images)

export default app