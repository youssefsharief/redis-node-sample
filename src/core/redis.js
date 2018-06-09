const redis = require("redis")
const config = require('../config/index')
const client = redis.createClient(config.redisPort, config.redisHostname, {no_ready_check: true})

client.auth(config.redisPassword, function (err) {
    if (err) throw err;
});

client.on('connect', function() {
    console.log('Connected to Redis');
});

client.on('error', function (err) {
    console.log('error event - ' + client.host + ':' + client.port + ' - ' + err);
});

module.exports = client


