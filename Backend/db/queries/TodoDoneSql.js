let psql = require('../postgrelDb').client;

module.exports.done=(id,userID)=>{


    let sql = 'UPDATE usertodo SET state =$3 WHERE userid =$1 AND id=$2';

    return new Promise((resolve,reject)=>{
        psql.query(sql,[userID,id,'D'],(err,result)=>{
            if (!err) return resolve(result)
        });
    })


};