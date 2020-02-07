
 const createSql  = require('../db/queries/createTodoSql'),
     validationResult = require('express-validator').validationResult,
     {checkSession,getSession} = require('../middleware/auth');

module.exports.createTodo = (req,res)=>{

    let subject = req.body.subject,  detail = req.body.detail, key = req.body.token;

    let result = validationResult(req);

    if(!result.isEmpty())  return res.status(422).json({ errors: result.array() });

    if (key === null || key === undefined  ) return res.send("UnAuthorized");

    checkSession(key).then(result=>{
        if (result !==1) return res.send("Invalid Token");

        getSession(key).then(email => {
            createSql.createTodo(email,subject,detail)
                .then((result)=>{
                    if (result.rowCount === 1) return res.send('Inserted');
                    return res.send('Not Inserted')
                }).catch((err)=>{
                res.send('Not Inserted')
            })
        }).catch(err => {})

    }).catch(err=>{});






};
