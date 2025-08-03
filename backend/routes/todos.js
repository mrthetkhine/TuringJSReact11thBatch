var express = require('express');
var router = express.Router();
//var todos = require('../dummy/todos');
var todos = require('../controllers/TodoController');

router.get('/',todos.getAllTodos);
router.get('/:id',todos.getTodoById);

router.post('/',todos.saveTodo);
router.put('/:id',todos.updateTodo);
router.delete('/:id',todos.deleteTodo);
module.exports = router;
