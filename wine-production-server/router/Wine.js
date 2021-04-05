const express = require('express');
const router = express.Router();
const fs = require('fs');
const Wines = require('../sequelize/wines');

router.post('/addwine',async (req, res)=>{
    try{
        const {wine_image} = req.files
        const { name:imageName, data } = wine_image
        const { name, price, loudness, type, description } = req.body
        const array = imageName.split('.')
        const extension = array[array.length-1]
        const random = Math.random() 
        fs.writeFile(`./public/${name}${random}.${extension}`,data,(err)=>{
            if(err) throw err
            console.log('saved')
        }) 
        // const image_path = `https://wine-production-server.herokuapp.com/${name}${random}.${extension}`
        const image_path = `http://localhost:8888/${name}${random}.${extension}`
        Wines.AddWine({name,image_path,loudness,description,price,type})
        res.send('saved')
    } catch(err){
        res.status(400)
    }
})

router.post('/deletewine',async (req,res)=>{
    try {
        const {name,image_path} = req.body
        const array_path = image_path.split('/')
        const path = array_path[array_path.length - 1]
        fs.unlink(`./public/${path}`,(err)=>{
            if(err) throw err
        })
        Wines.DeleteWine(name)
        res.send('deleted')
    } catch(err) {
        res.status(400)
    }
})


router.get('/getwines',async (req, res)=>{
    try{
        const data = await Wines.getWines()
        console.log(data)
        res.send(data)        
    } catch(err){
        console.log(err)
    }
})

module.exports = router