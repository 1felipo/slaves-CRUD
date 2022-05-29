import express, { json, urlencoded } from "express"
import morgan from "morgan"

import slavesRoutes from "./routes/slavesRoutes"

// Init app with express

const app = express()

// App settings

app.set("port", 3000)

// App middlewares

app.use(morgan("dev"))
app.use(json())
app.use(urlencoded({extended:false}))

// App routes

app.use(slavesRoutes)

// Export App

export default app