const donesql = require('../db/queries/TodoDoneSql'),
    {checkSession, getSession} = require('../middleware/auth');
exports.done = (req, res) => {
    let key = req.body.token, id = parseInt(req.params.id);

    if (key === null || key === undefined) return res.send("UnAuthorized");

    checkSession(key).then(result => {
        if (result !== 1) return res.send("Invalid Token");

        getSession(key).then(email => {
            donesql.done(id, email).then(result => {
                if (result.rowCount === 1) return res.send("DONE");
            }).catch(err => {
            })
        }).catch(err => {
        })

    }).catch(err => {
    });

};
