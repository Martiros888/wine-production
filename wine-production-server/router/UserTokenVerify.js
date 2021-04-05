const express = require('express');
const router = express.Router();
const UserDB = require('../sequelize/user');
const jwt = require('jsonwebtoken');

router.post('/usertokenverify',async (req, res)=>{
    try{
        const {token} = req.body
        const decodedToken = jwt.verify(token, process.env.TOKENKEY);
        const userData = await UserDB.isThere(decodedToken.email)
        if(!userData){
            res.status(400).send({messgae:'no user finded'})
            return 
        }
        const {password} = userData
        if(password !== decodedToken.password){
            res.status(400).send({message:'Password is incorrect'})
            return 
        }
        const { email, name, wines } = userData
        res.send({email,name,wines});
    } catch(err){
        res.status(400).json({message:'error'})
    }
})


module.exports = router;