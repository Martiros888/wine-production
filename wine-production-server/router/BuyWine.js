const express = require('express');
const router = express.Router();
const mailer = require('./nodemailer');

router.post('/',async (req, res)=>{
    try{
        const {wine,data} = req.body
        const message = {
            from: process.env.EMAIL,
            to: data.email,
            subject: "Congratulations",
            text: `${data.name} want to buy the ${wine.name}`,
        };
        mailer(message)
        res.send('ok')
    } catch(err){
        console.log(err)
    }
})


module.exports = router;