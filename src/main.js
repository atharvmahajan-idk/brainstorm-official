// imports 
import express from "express"
import dotenv from "dotenv"
import ejs from "ejs"

dotenv.config()

const app = express()
const port =  process.env.PORT
app.route("/")
.get((req, res) => {
    res.send('hello world')
})

app.listen(port ,  ()=>{
    console.log(`http://127.0.0.1:${port}`)
})
