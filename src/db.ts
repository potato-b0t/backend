import { connect } from "mongoose";

export async function startDB() {

    try {

        await connect("mongodb://localhost:27017/ecommerce")
        console.log("connected to DB")

    } catch (err) {

        console.log(err)

    }

}