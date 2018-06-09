const redis = require("redis")
const client = require('../core/redis')
const bluebird = require('bluebird')
bluebird.promisifyAll(redis);


module.exports = {

    saveKeyVal(req, res) {
        client.setAsync(req.body.key, req.body.val).then(reply => res.status(200).json(reply)).catch(err => res.status(400).json(err))
    },

    getKeyValue(req, res) {
        client.getAsync(req.params.key).then(reply => res.status(200).json(reply)).catch(err => res.status(400).json(err))
    },

    saveHashFieldValue(req, res) {
        client.hsetAsync(req.body.key, req.body.field, req.body.val).then(reply => res.status(200).json(reply)).catch(err => res.status(400).json(err))
    },

    getHashFieldValue(req, res) {
        client.hmget(req.params.key, req.params.field, (err, obj) => {
            if (err) {
                console.log(err)
                return res.status(400).json(err);
            } else {
                return res.status(200).json(obj);
            }
        });
    }, 

    saveHashAll(req, res) {
        client.HMSET(req.body.key, req.body.obj, (err, obj) => {
            if (err) {
                return res.status(400).json(err);
            } else {
                return res.status(200).json(obj);
            }
        })
    },

    getHashAll(req, res) {
        client.HGETALL(req.params.key, (err, obj) => {
            if (err) {
                return res.status(400).json(err);
            } else {
                return res.status(200).json(obj);
            }
        });
    },

}