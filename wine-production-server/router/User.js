const express = require('express');
const router = express.Router();
const UserDB = require('../sequelize/user');
const mailer = require('./nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/getusers',async (req, res)=>{
    try{
        const data = await UserDB.getUsers()
        res.send(data)
    } catch(err){
        res.status(400)
    }
})

router.post('/checkuser',async (req, res)=>{
    try{
        const { name, surname, password, email, phone} = req.body
        if (
            name.trim().length === 0 ||
            surname.trim().length === 0 ||
            email.trim().length <= 8 ||
            password.trim().length < 8
        ) {
            res.status(400).json({message:"the inputs are not filled"});
            return 
        }
        let checkEmail = await UserDB.isThere(email);
        if (checkEmail !== undefined) {
            res.status(400).json({message:"this email already in use"});
            return 
        }
        let code = `${Math.floor(Math.random() * 100000)}`;
        let hash = await bcrypt.hash(code, 10);
        const message = {
            from: "tahku_ohjluhe@mail.ru",
            to: email,
            subject: "Congratulations",
            text: `dzer cody ${code}`,
        };
        console.log(email)
        mailer(message);
        console.log(hash)
        res.send(hash)
    } catch(err){
        res.status(400)
        console.log(err)
    }
})

router.post('/saveuser',async (req, res)=>{
    try{
        const { state:{name,surname,email,password,verificationCode,phone}, code } = req.body
        if (
            name.trim().length === 0 ||
            surname.trim().length === 0 ||
            email.trim().length <= 8 ||
            password.trim().length < 8
        ) {
            res.status(400).json({message:"the inputs are not filled"});
            return 
        }
        let checkEmail = await UserDB.isThere(email);
        if (checkEmail !== undefined) {
            res.status(400).json({message:"this email already in use"});
            return 
        }
        console.log(req.body)
        let checkCode = await bcrypt.compare(verificationCode, code)
        if (!checkCode) {
            res.status(400).json({message:"code is false"});
            return 
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        await UserDB.AddUser(email.toLowerCase(), name, surname, phone, hashedPassword);
        res.send('User saved');
    } catch(err){
        res.status(400)
    }
})

router.post('/login',async (req, res)=>{
    try{
        const { loginEmail, loginPassword } = req.body.state
        const user = await UserDB.isThere(loginEmail);
        if (!user) {
            res.status(400).json({message:"User not finded"});
            return 
        }
        const { email, surname, name, password } = user;
        let isPasswordTrue = await bcrypt.compare(loginPassword, password);
        if (!isPasswordTrue) {
            res.status(400).json({message:"Password is false"});
            return 
        }
        const token = jwt.sign(
            { email, surname, name, password },
            process.env.TOKENKEY,
            {
                expiresIn: "24h",
            },
        );
        res.send(token);
    } catch(err){
        console.log(err)
    }
})

module.exports = router;