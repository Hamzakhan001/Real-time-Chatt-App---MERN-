const mongoose=require("mongoose");


const userSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	picture:{
		type:String,
		default:""
	},
	

},
{timestamps:true}
)

const userModel=mongoose.model("User",userSchema);
module.exports=userModel
