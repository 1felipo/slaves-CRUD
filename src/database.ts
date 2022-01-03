import mongoose from "mongoose"

async function connect() {

    try{
        await mongoose.connect("mongodb+srv://Felipe:44484827@cluster0.kqkfu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("database connected")
    }
    catch{
        console.log("error connecting te db")
    }
}

export default connect