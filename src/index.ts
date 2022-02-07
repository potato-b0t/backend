import app from "./app"
import { startDB } from "./db"

async function main(){

    await startDB()
    await app.listen(app.get("port"))
    console.log("server running on", app.get("port"))

}

main()