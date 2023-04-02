const express=require("express");
const app=express();
const connectDB=require("./config/db");
const dotenv=require("dotenv");
const colors=require("colors");
const userRoutes=require("./routes/userRoutes")
const {notFound,errorHandler}=require('./middleware/errorMiddleware')


dotenv.config();
connectDB();
app.use(express.json());
app.get("/api/chat",(req,res)=>{
	res.send("done")
})

app.use("/api/user",userRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(4000,console.log("server connected".yellow.bold));




