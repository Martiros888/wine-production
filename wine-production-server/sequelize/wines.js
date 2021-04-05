const { wine, user } = require('../model/mysql');


module.exports = class Wines{
    static async AddWine({name,image_path,loudness,type,description,price}){
        try {
            await wine.create({name,image_path,loudness,type,description,price})
            return 'wine added'
        } catch(err) {
            console.log(err)
        }
    }

    static async DeleteWine(name){
        try {
            await wine.destroy({where:{name}})
        } catch(err) {
            console.log(err)
        }
    }

    static async getWines(){
        try {
            return await wine.findAll()
        } catch(err) {
            console.log(err)
        }
    }

    static async AddToBasket(email,WineData) {
        let data = await user.findOne({where:{email}})
        data = JSON.parse(JSON.stringify(data))
        const { wines:WineString } = data
        if(!WineString){
            let wines = [WineData]
            const newWinesString = JSON.stringify(wines) 
            await user.update({wines:newWinesString},{where:{email}})
            return 
        }
        let wines = JSON.parse(WineString)
        wines = [...wines,WineData]
        const newWinesString = JSON.stringify(wines) 
        await user.update({wines:newWinesString},{where:{email}})
    }

    static async DeleteFromBasket(email,WineData){
        const data = await user.findOne({where:{email}})
        const { wines:WineString } = data
        let wines = JSON.parse(WineString)
        wines = wines.filter(e=>e.name!==WineData.name)
        const newWinesString = JSON.stringify(wines) 
        await user.update({wines:newWinesString},{where:{email}})
    }
    
} 