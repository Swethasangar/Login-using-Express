const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
var usname = "Sienna"
var uspass = 546
// Middleware for post
// app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Get Method
// app.get("/login",function(req,res){
//     // console.log(req.query.username)
//     // console.log(req.query.password)
//     if(req.query.username == usname && req.query.password == uspass){
//         res.send(true)
//     }
//     else{
//         res.send(false)
//     }
// })

//Post Method
app.post("/login",function(req,res){
    // console.log(req.query.username)
    // console.log(req.query.password)
    if(req.body.username == usname && req.body.password == uspass){
        res.send(true)
    }
    else{
        res.send(false)
    }
})
app.listen(5000,function(){
    console.log("Server Started...")
})