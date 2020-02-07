
 const postDB =  require('pg').Pool,
     dotenv = require('dotenv').config(),
     client = new postDB({
         host: process.env.host,
         user: process.env.postgre_Username,
         password: process.env.postgres_Password,
         database: process.env.postgres_Table_Name,
         port: process.env.postgres_Port
 });

 client.connect( resp=>{

    if (resp) return console.log(resp.stack);

     console.log("Postgres connected")
});

module.exports.client = client;