import express from "express"


const Router =  express.Router()

Router.route("/")
.get((req ,  res)=>{
    res.render("docs")
})

export default Router