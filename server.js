const express=require("express");
const app=express();

app.get("/api/chat",(req,res)=>{
	res.send("done")
})


app.listen(4001,console.log("server connected"))




