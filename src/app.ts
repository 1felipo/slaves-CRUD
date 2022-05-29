import express, { json } from "express"
import morgan from "morgan"
import path from "path"

import slavesRoutes from "./routes/slavesRoutes"

class Application {
    
    app: express.Application

    constructor(){
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    settings(){
        this.app.set("port",3000)
        this.app.set("view engine", "ejs")
    }

    middlewares(){
        this.app.use(morgan("dev"))
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
    }

    routes(){
        this.app.use(slavesRoutes)
    }

    start(){
        this.app.listen(this.app.get("port"), ()=>{
            console.log(`Server on port ${this.app.get("port")}`)
        })
    }
}

export default Application