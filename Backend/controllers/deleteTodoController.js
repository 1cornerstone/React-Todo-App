const Sql = require('../db/queries/deleteSQl'),
    {checkSession,getSession} = require('../middleware/auth');


exports.deleteTodo = (req,res)=>{
    let key = req.body.token, id = parseInt(req.params.id);

    if (key === null || key === undefined  ) return res.send("UnAuthorized");

    checkSession(key).then(result=>{
        if (result !==1) return res.send("Invalid Token");

        getSession(key).then(email => {
            Sql.deleteSql(id,email).then(result=>{
                if (result.rowCount === 1) return res.send("Deleted");
                return res.send('error deleting')
            }).catch(err=>{})
        }).catch(err => {})

    }).catch(err=>{});

};
