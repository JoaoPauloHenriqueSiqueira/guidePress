const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send('Articles');
})

router.get('/adm/articles/new', (req, res) => {
    res.send('NOVA Articles');
})

module.exports = router;