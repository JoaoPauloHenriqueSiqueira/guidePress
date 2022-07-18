const express = require('express');
const router = express.Router();

router.get('/categories', (req,res)=>{
    res.send('Categorias');
})

router.get('/adm/categories/new', (req,res)=>{
    res.send('NOVA Categoria');
})

module.exports = router;