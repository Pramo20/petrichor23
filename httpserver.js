const express=require('express')
const app=express()
const port=3000 

function func(){
    console.log("Sever is listening on port 3000")
}

app.listen(port,func)