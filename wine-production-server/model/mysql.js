const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME,process.env.DBNAME,process.env.DBPASSWORD,{
    host:process.env.DBHOST,
    dialect:'mysql',
    port:3306
})




const wine = sequelize.define('wines',{
    name:{
        type:DataTypes.STRING
    },
    image_path:{
        type:DataTypes.STRING
    },
    loudness:{
        type:DataTypes.STRING
    },
    type:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.STRING
    }
})


const admin = sequelize.define('admins',{
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    }
})


const user = sequelize.define('users',{
    email:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    surname:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    wines:{
        type:DataTypes.STRING
    }
})


module.exports = {
    wine,
    sequelize,
    admin,
    user,
}

