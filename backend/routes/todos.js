var express = require('express');
var router = express.Router();
var todos = require('../dummy/todos');

router.get('/',function (req, res, next) {
    console.log('todos get /');
    console.log('isArray ',Array.isArray(todos));
    res.json(todos);
})
router.get('/:id',function (req, res, next) {
    const id = req.params.id;
    console.log('todos get / ',id);
    res.json({
        id: id,
        title:'Test'
    });
})
router.post('/',function (req, res, next) {
    const todo = req.body;
    console.log('save todo ',todo);
    res.status(201).json(todo);
})
router.put('/:id',function (req, res, next) {
    const todo = req.body;
    console.log('update todo ',todo);
    res.status(200).json(todo);
})
router.delete('/:id',function (req, res, next) {
    const id = req.params.id;
    console.log('delete todo ');
    res.status(200).json({
        id:id,
        message: 'Successfully deleted',
    });
})
module.exports = router;
