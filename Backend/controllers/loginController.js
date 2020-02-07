
 const valideResult = require('express-validator').validationResult,
        bcrypt = require('../utils/passCrypt'),
        loginSql = require('../db/queries/loginSql'),
     {createSession} = require('../middleware/auth');

module.exports.userLogin = (req,res)=>{

    const err = valideResult(req);

    if(!err.isEmpty())  return res.status(422).json({ errors:err.array() }); // check if all field required before reading request

        let email = req.body.email.trim().toLowerCase(),
        password = req.body.password.trim().toLowerCase();

    loginSql.getUserByEmail(email)
        .then(result=>{

            if (result.rowCount === 1){
                let nPassword = result.rows[0].password;
                bcrypt.compPassword(password,nPassword)
                    .then(resp =>{
                        if (resp) {
                            createSession(email).then(result=>{
                               res.send({
                                   'token':result
                               })
                            }).catch(err=>{})
                        }else{
                            res.send("User Password Incorrect");
                        }
                    })
                    .catch(err=>{console.log(err)});

            }else{
                res.send(`Invalid details provided`)
            }
        })
        .catch(err=>{console.log(err)})

};