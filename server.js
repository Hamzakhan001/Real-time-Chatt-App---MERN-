const express=require("express");
const app=express();

app.get("http://localhost:4000/api/chat",(req,res)=>{
	res.send("done")
})


app.listen(4000,console.log("server connected"))




