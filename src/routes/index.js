const express=require('express');
const router=express.Router();
const Equipo=require('../model/database2');
const User=require('../model/database');

router.get('/',(req,res,next)=>{
	res.render('index');
});
router.get('/signup',(req,res,next)=>{
	res.render('signup');
});
router.post('/signup',async(req,res,next)=>{
	const user = new User(req.body);
	await user.save();
	console.log(user);
	res.redirect('/sistema');
});
router.get('/sistema',async(req,res,next)=>{
	const users = await User.find();		
	res.render('sistema',{
		users
	});
});

module.exports=router;
