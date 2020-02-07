 const  db = require('../postgrelDb');

 module.exports.getUserByEmail = (email)=>{
     let sql =  'SELECT * FROM  users WHERE email = $1';

     return  new Promise((resolve, reject)=>{

         db.client.query(sql,[email], (err,result)=>{
             if (err) return reject(err);
             return  resolve(result);
         });
     })
 };