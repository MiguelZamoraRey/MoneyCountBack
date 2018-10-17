var mongoose = require('mongoose');
var account  = mongoose.model('account');
var express = require('express');
var router = express.Router();

var AccountController = require('../controllers/accountController');

router.get('/accounts', AccountController.getAllAccounts);

router.get('/account/:id', AccountController.getAccount);

router.post('/account', AccountController.insertAccount);

router.put('/account/:id', AccountController.updateAccount);

router.delete('/account/:id', AccountController.deleteAccount);

module.exports = router;