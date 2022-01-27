const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const bodyparser = require('body-parser');
const path = require("path");
const app = express();
dotenv.config({path:'config.env'});
const port = process.env.PORT || 8080;

// Log request
app.use(morgan('tiny'));
//parse request body-parser
app.use(bodyparser.urlencoded({extended:true}))
//set view engine
app.set("view engine","ejs");
// app.set ("views", path.resolve(__dirname,"views/ejs")) // Thay đổi đường dãn trỏ tới EJS
// load assest
app.use('/css',express.static(path.resolve(__dirname,"assest/css")));
app.use('/img',express.static(path.resolve(__dirname,"assest/img")));
app.use('/js',express.static(path.resolve(__dirname,"assest/js")));


app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}/`);
})