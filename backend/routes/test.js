var express = require('express');
const todos = require("../dummy/todos");

var router = express.Router();

router.get('/', (req, res) => {
    res.send('Test / ');
});
router.get('/ab?cd', (req, res) => {
    res.send('ab?cd / ');
});
router.get('/data/:first/:second', (req, res) => {
    const first = req.params['first'];
    const second = req.params.second;
    res.send('data from test '+first +' '+second);
});
router.get('/hello', (req, res,next) => {
    console.log('hello');
    next();
},(req, res,next) => {
    console.log('next hello');
    res.send('next hello');
    next();
})
router.get('/hello', (req, res) => {
    res.send('second hello');
})
module.exports = router;