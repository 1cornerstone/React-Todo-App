 const redis = require('redis'),
     redisClient = redis.createClient();

 redisClient.on('connect', function() {
     console.log('Redis client connected');
 });

 redisClient.on('error', function (err) {
     console.log('Something went wrong ' + err);
 });


 module.exports = redisClient;