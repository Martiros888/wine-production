const express = require('express');
const router = express.Router();
const Wines = require('../sequelize/wines');

router.post('/add',async (req, res)=>{
    try{
        const { wine, data } = req.body
        const {email} = data
        await Wines.AddToBasket(email,wine)
        res.send({message:'added'})
    } catch(err){
        res.status(400).json({message:err.message})
        console.log(err)
    }
})

router.post('/delete',async (req, res)=>{
    try{
        const { wine, data } = req.body
        const {email} = data
        await Wines.DeleteFromBasket(email,wine)
        res.send({message:'deleted'})
    } catch(err){
        res.status(400).json({message:err.message})
    }
})

module.exports = router;