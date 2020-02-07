
const  {checkSession} = require('../middleware/auth'),
    sessionStore = require('../db/redisDb');

module.exports.Out = (req,res)=>{

    let key = req.body.token;

    if (key === null || key === undefined  ) return res.send("UnAuthorized");

    checkSession(key).then(result=>{
        if (result !==1) return res.send("Invalid Token");

        sessionStore.del(key,(err,resp)=>{
            if(!err) return  res.send("logout") ;
            console.log(err)
        })
    }).catch(err=>{});
};