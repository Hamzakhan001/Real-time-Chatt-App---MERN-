const express=require("express");
const {registerUser, authUser,allUsers}=require('../controllers/userControllers');
const router=express.Router();
const {protect}=require("../middleware/authMiddleware");


// router.get('/login',)
router.route("/").post(registerUser).get(protect,allUsers);
router.route("/login",authUser);

module.exports=router; 