const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../sequelize/admin');

router.post('/',async (req, res)=>{
    try{
        const { token } = req.body
        const data = jwt.verify(token,process.env.TOKENKEY)
        const { email, password } = data
        const admin = await Admin.getAdmin(email)
        if(!admin){
            res.status(400).json({message:'not finded'})
            return 
        }
        const { password:passwordFromAdmin } = admin
        if(passwordFromAdmin!==password){
            res.status(400).json({message:'password is incorect'})
        }
        res.send(data)
    } catch(err){
        res.status(400).json({message:'please login again'})
    }
})

module.exports = router