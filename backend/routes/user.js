import express from 'express'
import bcrypt from 'bcrypt'
import User from '../schema/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router();

router.post('/signup',async(req,res) => {
    try {
        const {email , password, name} = req.body;
        if(!email||!password||!name) return res.status(400).json({message:'Credentials missing'});
        const exists = await User.findOne({email})
        if(exists) return res.status(409).json({message:'user already exists'})
        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({
            email,
            name,
            password:hashedPassword
        })
        await user.save();
        const token = jwt.sign({id:user._id,email:user.email}, process.env.JWT_SECRET,{expiresIn:'7d'})
        return res.status(200).json({user:user , token , message:'User Created'});
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Server error'})
    }
})

router.post('/login', async(req,res) => {
    try {
        const {email, password} = req.body
        if(!email||!password) return res.status(400).json({message:'Fill all credentials'})
            const user = await User.findOne({email})
        if(!user) return res.status(404).json({message:'No user found'})
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({message:"Wrong credentials"})
            const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:'7d'})
        return res.status(200).json({message:'Login successful',user:user,token})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Server Error'})
    }
})

export default router;