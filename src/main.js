// imports 
import express from "express"
import dotenv from "dotenv"
import ejs from "ejs"
import path from "path"

import docsRouter from  "./routes/docs.js"

dotenv.config()

const app = express()
const port =  process.env.PORT

app.use("/public" ,  express.static(path.resolve("public")))

app.set("view engine", "ejs")
app.set("views"  ,  path.resolve("src/views"))
console.log(path.resolve("views/"))

app.use("/docs" , docsRouter)

app.route("/")
.get((req, res) => {
    res.render("planner")
})

app.listen(port ,  ()=>{
    console.log(`http://127.0.0.1:${port}`)
})
