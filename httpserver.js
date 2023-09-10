const express=require('express')
const app=express()
const port=3000 

// function func(){
//     console.log("Sever is listening on port 3000")
// }

app.listen(port,()=>{
    console.log("Sever is listening on port 3000")
})

//var student=[]

app.get('/1',(req,res) => {
    res.send("Hello World1")
})
