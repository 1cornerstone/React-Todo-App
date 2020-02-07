const resetSql = require('../db/queries/TodoResetSql'),
    {checkSession,getSession} = require('../middleware/auth');



exports.reset = (req,res)=>{
    let key = req.body.token, id = parseInt(req.params.id);

    console.log(id)

    if (key === null || key === undefined  ) return res.send("UnAuthorized");

    checkSession(key).then(result=>{
        if (result !==1) return res.send("Invalid Token");

        getSession(key).then(email => {
            resetSql.Reset(id,email).then(result=>{
                if (result.rowCount === 1) return res.send("Reset");
            }).catch(err=>{})

        }).catch(err => {})

    }).catch(err=>{});


};
