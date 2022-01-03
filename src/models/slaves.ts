import mongoose from "mongoose"
const Schema = mongoose.Schema

const SlaveSchema = new Schema ({
    slave: String,
    description: String,
    status:{
        type: Boolean,
        default: false
    }
})

export default mongoose.model("slave", SlaveSchema)
