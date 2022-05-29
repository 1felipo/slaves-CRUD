import app from "./app"
import database from "./database"
import colors from "colors/safe"

const startAppCallback = () => {
    console.log(colors.green("server on port 3000"))
}

app.listen(3001, startAppCallback)
