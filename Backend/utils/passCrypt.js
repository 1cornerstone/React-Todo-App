const bcrypt = require('bcrypt');

let saltRounds = 10;

module.exports.crypt = (password) => {

    return new Promise((resolve, reject) => {

        bcrypt.hash(password, saltRounds, (err, resp) => {
            if (err) return reject(err);
            return resolve(resp);
        })

    })

};

module.exports.compPassword = (password, hash_Password) => {

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash_Password, (err, resp) => {
            if (err) return reject(err);

            return resolve(resp);
        });
    })

};

