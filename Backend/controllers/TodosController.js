
const todo = require('../db/queries/TodosSql'),
    {checkSession,getSession} = require('../middleware/auth');


module.exports.getAll = (req,res)=>{

    let key = req.body.token;

    if (key === null || key === undefined  ) return res.send("UnAuthorized");

    checkSession(key).then(result=>{

        if (result !==1) return res.send("Invalid Token");
        getSession(key).then(email => {
            todo.getList(email)
                .then(result=>{

                    res.send(result.rows)
                }).catch(err=>{
                console.log(err)
            })
        }).catch(err => {})

    }).catch(err=>{});





};