import mongoose from "mongoose"
import colors from "colors/safe"
import config from "./config"

async function connect() {

    try{
        await mongoose.connect(`mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_CLUSTER}.kqkfu.mongodb.net/?retryWrites=true&w=majority`)
        console.log(colors.green("Database connected successful"))
    }
    catch{
        console.log(colors.red("Error connecting with the db"))
    }
}

export default connect