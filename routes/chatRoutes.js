const express=require("express");


const router=express.Router()



router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChats);
router.route('/group').post(protect,createGroupChats);
router.route('/rename').put(protect,renameGroupChats);
router.route('/groupremove').put(protect,removeFromGroup);
router.route('/groupadd').put(protect,addToGroup);


module.exports={router}