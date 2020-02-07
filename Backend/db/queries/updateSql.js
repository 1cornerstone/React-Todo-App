let psql = require('../postgrelDb').client;

module.exports.updateTodo =(id,userID,subject,detail)=>{

    let sql = 'UPDATE usertodo SET details =$1 , subject =$2 WHERE userid =$3 AND id=$4';

    return new Promise((resolve,reject)=>{
        psql.query(sql,[detail,subject,userID,id],(err,result)=>{
            if (!err) return resolve(result)
        });
    })


};