const asyncHandler=require("express-async-handler");
const User=require("../models/userModel")


const registerUser=asyncHandler(async(req,res)=>{
	const {name,email,password,pic}=req.body

	if(!name || !email || !password){
		res.status(400);
		throw new Error("Please enter all fields");
	}

	const userExists=await User.findOne({email});
	if(userExists){
		res.status(400);
		throw new Error("User already exists");
	}

	const user=await User.create({
		name,email,password,pic
	})

	if(user){
		res.status(200).json({
			id:user._id,
			name:user.name,
			email:user.email,
			pic:user.picture,
			token:generateToken(user._id)
		})
	}
	else{
		res.status(400);
		throw new Error ("Failed to create the user");
	}
});

module.exports={registerUser};