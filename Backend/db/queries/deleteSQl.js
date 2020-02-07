const  psql = require('../postgrelDb').client;

exports.deleteSql = (id,userID)=>{

    let sql = "DELETE FROM usertodo WHERE userid= $1 and id= $2";

    return new Promise((resolve, reject) => {
        psql.query(sql,[userID,id], (err,result )=>{
            if (!err) return resolve(result);
        });
    })
};