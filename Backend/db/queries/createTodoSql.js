const psql = require('../postgrelDb').client;

module.exports.createTodo =(user_ID,subject,detail)=>{

   let sql = "insert into usertodo (userID,subject,details,state) values($1,$2,$3,$4)",
       values = [user_ID,subject,detail,'U'];

   return new Promise((resolve,reject) => {
        psql.query(sql,values, (err,res)=> {
            if (!err) return resolve(res);

            return reject(err)
        })
    })
};