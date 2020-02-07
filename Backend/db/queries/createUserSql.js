const postClient = require('../postgrelDb').client;

module.exports.createUser = (name, username, email, password) => {

    let sql = "INSERT INTO users (name,username,email,password) VALUES($1,$2,$3,$4)",
        values = [name, username, email, password];

   return new Promise((resolve, reject) => {
       postClient.query(sql,values, (err, res) => {
           if (err) return reject(err);

           return resolve(res);
       })

    });


};