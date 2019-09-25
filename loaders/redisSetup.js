// redis = {};
// var client = require('redis').createClient(process.env.REDIS_URL);

// client.on("error", function (err) {
//     console.log("Error " + err);
// });

// redis.client = client;



// module.exports = redis;


function redis(app,pool){
    redis = {};
    // var client = require('redis').createClient(process.env.REDIS_URL);
    
    // client.on("error", function (err) {
    //     console.log("Error " + err);
    // });
    
    // redis.client = client;

    return redis;

    }
    module.exports = redis;