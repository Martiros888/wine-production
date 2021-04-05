require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const morgan = require("morgan");
const cors = require('cors');
const fileupload = require('express-fileupload');
const { sequelize } = require('./model/mysql');

sequelize.authenticate().then(res=>console.log('connected')).catch(err=>console.log(err))



app.use(cors())
app.use(fileupload())
app.use(morgan(`dev`));
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('public'))
app.use('/adminlogin',require('./router/AdminLogin'))
app.use('/tokenverify',require('./router/TokenDecode'))
app.use('/',require('./router/Wine'))
app.use('/',require('./router/User'))
app.use('/',require('./router/UserTokenVerify'))
app.use('/buywine',require('./router/BuyWine.js'))
app.use('/basket',require('./router/Basket'))
const path = require('path');
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.listen(port, () => console.log(`server is runnig on  http://localhost:${port}`));



