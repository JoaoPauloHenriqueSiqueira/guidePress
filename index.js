const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./database/config");
const app = express();

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const ArticleModel = require("./articles/Article");
const CategoryModel = require("./categories/Category");

//View
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Connected!');
    }).catch((error) => {
        console.log('Error! ' + error);
    })

//Route
app.get("/", (req, res) => {
    res.render('index');
})

app.use('/', categoriesController);
app.use('/', articlesController);

app.listen(8080, () => {
    console.log('Server is running');
})