let todoService = require('../services/TodoService');


async function getAllTodos (req, res, next) {
    let todos = await todoService.getAllTodos();
    res.json({
        message:'Success',
        data: todos,
    });
}
async function getTodoById (req, res, next) {
    const id = req.params.id;
    try
    {
        let todo = await todoService.getTodoById(id);
        res.json({
            message:'Success',
            data: todo,
        });
    }
    catch(err){
        res.status(500).send('Something went wrong');
    }
}
async function saveTodo(req, res, next) {
    let todo = req.body;
    try
    {
        let newTodo = await todoService.saveTodo(todo);
        res.status(201).json({
            message:"Success",
            data:newTodo
        })
    }
    catch(err)
    {
        //console.log('Error ',err);
        if(err instanceof mongoose.Error.ValidationError)
        {
            res.status(400).json({
                error:err
            })
        }
        else
        {
            res.status(500).json({
                error:err
            })
        }

    }
}
async function updateTodo (req, res, next) {
    const id = req.params.id;
    let todo = req.body;
    try
    {
        todo = await todoService.updateTodo(id, todo);
        res.status(200).json({
            message:'Success',
            data:todo
        });
    }
    catch(err)
    {
        res.status(404).json({
            error:err.message
        })
    }
}
async function deleteTodo (req, res) {
    const id = req.params.id;
    try
    {
        let todo = await todoService.deleteTodo(id);
        res.status(200).json(todo);
    }
    catch(err)
    {
        res.status(404).json({
            error:err.message
        })
    }

}
module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo,
}