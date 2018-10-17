var mongoose = require('mongoose');
var account  = mongoose.model('account');
var express = require('express');
var router = express.Router();

var md_auth = require('../middleware/autenticated');

var AccountController = require('../controllers/accountController');

router.get('/accounts', md_auth.ensureAuth, AccountController.getAllAccounts);

router.get('/account/:id', md_auth.ensureAuth, AccountController.getAccount);

router.post('/account', md_auth.ensureAuth, AccountController.insertAccount);

router.put('/account/:id', md_auth.ensureAuth, AccountController.updateAccount);

router.delete('/account/:id', md_auth.ensureAuth, AccountController.deleteAccount);

module.exports = router;