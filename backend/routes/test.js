var express = require('express');
const todos = require("../dummy/todos");
const path = require("path");

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
router.get('/download',(req,res) => {
    res.download('./public/hello.txt');
});
router.get('/admin',(req,res) => {
    console.log('admin');
    res.redirect('/test/login');
});
router.get('/login',(req,res) => {
    res.json({
        message:"UnAuthenticated",
    });
});
router.get('/send',(req,res) => {
    res.send('<h1>Hello Send</h1>');
})
router.get('/sendFile/:name',function (req,res,next){
    console.log('Send File route');
    const options = {
        root: path.join(__dirname,'../', '/public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    const fileName = req.params.name
    console.log('Filename ',fileName);
    res.sendFile(fileName, options, (err) => {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
});
module.exports = router;