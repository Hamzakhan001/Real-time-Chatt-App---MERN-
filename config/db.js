const mongoose=require("mongoose");




const connectDB=async ()=>{
	try{
		console.log("dbconnected",process.env.MONGO_URI)
		const conn=await mongoose.connect(process.env.MONGO_URI,{
			useNewUrlParser:true,
			useUnifiedTopology:true,
		})
		console.log(`dbconnected,${conn.connection.host}`);
	}
	catch(err){
		console.error(err);
		process.exit();

	}
}

module.exports=connectDB;