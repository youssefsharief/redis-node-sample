

const router = require('express').Router()
const ctrl = require('./ctrl')
router.post('/keyVal', ctrl.saveKeyVal);
router.get('/keyVal/:key', ctrl.getKeyValue);
router.post('/hash', ctrl.saveHashAll);
router.get('/hash/:key', ctrl.getHashAll);
router.post('/hashField', ctrl.saveHashFieldValue);
router.get('/hash/:key/:field', ctrl.getHashFieldValue);

module.exports = router