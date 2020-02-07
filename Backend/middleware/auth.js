const sessionStore = require('../db/redisDb'),
      Gen= require('uuid-token-generator'),
        gen = new Gen(256, Gen.BASE62),
      key = gen.generate();

const createSession = (email)=>{
    return new Promise((resolve,reject) => {
         sessionStore.set(key,email,(err,resp)=>{
             if(!err) {
                 sessionStore.expire(key, 4000);
                 return resolve(key);
             }
             return  reject(err);
         })
     })
 };

const getSession = (key)=>{
    return new Promise((resolve,reject) => {
        sessionStore.get(key,(err,resp)=>{
            if(!err) return  resolve(resp) ;
            return  reject(err);
        })
    })
};

const checkSession =  (key)=>{
    return new Promise((resolve,reject) => {
        sessionStore.exists(key,(err,resp)=>{
            if(!err) return  resolve(resp) ;
            return  reject(err);
        })
    })
};

module.exports = {createSession,getSession,checkSession};



