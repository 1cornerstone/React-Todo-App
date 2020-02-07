const updateSql = require('../db/queries/updateSql'),
    {checkSession,getSession} = require('../middleware/auth');

exports.updateTodo = (req,res)=>{
    let key = req.body.token, id = parseInt(req.params.id), subject = req.body.subject, detail = req.body.detail;

    if (key === null || key === undefined  ) return res.send("UnAuthorized");

    checkSession(key).then(result=>{
        if (result !==1) return res.send("Invalid Token");

        getSession(key).then(email => {
            updateSql.updateTodo(id,email,subject,detail).then(result=>{
                if (result.rowCount === 1) return res.send("Updated");
            }).catch(err=>{})

        }).catch(err => {})

    }).catch(err=>{});


};
