const  router = require('express').Router(),
    signUpController = require('../controllers/createUserController'),
    loginController = require('../controllers/loginController'),
    {signup,login,createTodo,update} = require('../utils/validator'),
    create_Todo = require('../controllers/createTodoController'),
    getTodos = require('../controllers/TodosController'),
    account = require('../controllers/accountController'),
    updateTodo = require('../controllers/updateTodoController'),
    deleteTodo  = require('../controllers/deleteTodoController'),
    resetTodo  = require('../controllers/TodoResetController'),
    doneTodo  = require('../controllers/TodoDoneController'),
    logOut= require('../controllers/logoutController')


/*createUser
* login
*  -create your addTodo
    -list addTodo
    -update addTodo
    -delete addTodo */

 router.get('/',(req,res)=>{ res.send("hell")});
 router.post('/signUp',signup, signUpController.sign);
 router.post('/login',login,loginController.userLogin);
 router.post('/createTodo',createTodo,create_Todo.createTodo);
 router.post('/Todos',getTodos.getAll);
 router.post('/profile',account.getAccount);
 router.post('/update/:id',update,updateTodo.updateTodo );
router.post('/delete/:id', deleteTodo.deleteTodo);
router.post('/done/:id', doneTodo.done);
router.post('/reset/:id', resetTodo.reset);
router.post('/logout', logOut.Out);

module.exports = router;

