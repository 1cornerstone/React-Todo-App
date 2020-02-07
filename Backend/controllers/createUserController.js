const validateResult = require('express-validator').validationResult,
    cryptPassword = require('../utils/passCrypt'),
    createUser = require('../db/queries/createUserSql'),
    {createSession} = require('../middleware/auth');

module.exports.sign = (req, res) => {

    let result = validateResult(req);
    if (!result.isEmpty()) return res.status(422).json({errors: result.array()});

    let name = req.body.name.trim().toLowerCase(),
        username = req.body.username.trim().toLowerCase(),
        email = req.body.email.trim().toLowerCase(),
        password = req.body.password.trim().toLowerCase();
    cryptPassword.crypt(password)
        .then(resp => {  password = resp })
        .then(resp => {
            createUser.createUser(name, username, email, password)
                .then(result => {
                    if (result.rowCount === 1) {
                        createSession(email).then(result=>{
                            res.send({
                                'token':result
                            })
                        }).catch(err=>{})
                    }
                })
                .catch(err => {
                    let def_error = err.constraint.split('_')[1];
                    res.send(`${def_error} already exist`);
                });
        })
        .catch(err => {
        });

};