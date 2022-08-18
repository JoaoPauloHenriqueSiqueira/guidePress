const express = require('express');
const router = express.Router();
const Category = require("./Category");
const slugify = require("slugify");

router.get('/adm/categories/new', (req, res) => {
    res.render("adm/categories/new");
})

router.post('/categories/save', (req, res) => {
    var title = req.body.title;
    if (title == undefined) {
        res.redirect("/admin/categories/new");
    }

    Category.create({
        title: title,
        slug: slugify(title)
    }).then(() => {
        res.redirect("/");
    })

})


module.exports = router;