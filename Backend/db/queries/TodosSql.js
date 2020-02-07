const  db = require('../postgrelDb');

module.exports.getList = (email)=>{
    let sql =  'SELECT * FROM  usertodo WHERE userid = $1';

    return  new Promise((resolve, reject)=>{

        db.client.query(sql,[email], (err,result)=>{
            if (err) return reject(err);
            return  resolve(result);
        });
    })
};