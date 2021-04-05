const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin  = require('../sequelize/admin');


router.post('/',async (req, res)=>{
    try{
        const { LoginEmail, LoginPassword } = req.body
        console.log(LoginEmail,LoginPassword)
        const data = await Admin.getAdmin(LoginEmail)
        if(!data){
            res.status(400).send('not finded')
            return 
        }
        const admin = JSON.parse(JSON.stringify(data,null,2))
        const { email, password, name } = admin
        const isPasswordTrue = await bcrypt.compare(LoginPassword,password)
        console.log(isPasswordTrue)
        if(!isPasswordTrue){
            res.status(400).send('password is false')
            return 
        }
        const token = jwt.sign({email,password,name},process.env.TOKENKEY,{expiresIn:'1h'})
        res.send(token)
    } catch(err){
        res.status(400).json({message:'error'})
    }
})

module.exports = router