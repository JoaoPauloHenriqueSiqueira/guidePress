const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/config");
const app = express();

//View
app.set('view engine','ejs');

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//Database
connection
.authenticate()
.then(()=>{
    console.log('Connected!');
}).catch((error)=>{
    console.log('Error! ' + error);
})

//Route
app.get("/", (req,res) => {
    res.render('index');
})

app.listen(8080, () =>{
    console.log('Server is running');
})