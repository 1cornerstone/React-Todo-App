const accountSql = require('../db/queries/loginSql'),
{createSession,checkSession,getSession} = require('../middleware/auth');

module.exports.getAccount = (req,res) =>{

    let key = req.body.token;

    if (key === null || key === undefined  ) return res.send("UnAuthorized");

    checkSession(key).then(result=>{
        if (result !==1) return res.send("Invalid Token");

        getSession(key).then(email => {
            accountSql.getUserByEmail(email).then(result=>{
                if (result.rowCount === 1){
                    let user = {
                        'name':  result.rows[0].name,
                        'email':  result.rows[0].email,
                        'username':  result.rows[0].username
                    };
                    res.send(user)
                } }).catch(err=>{})
        }).catch(err => {})

    }).catch(err=>{});





};