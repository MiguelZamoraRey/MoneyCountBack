var mongoose = require('mongoose');
var user  = mongoose.model('user');
var express = require('express');
var router = express.Router();

var md_auth = require('../middleware/autenticated');

var UserController = require('../controllers/userController');

router.post('/login', UserController.loginUser);

router.get('/users', md_auth.ensureAuth, UserController.getAllUsers);

router.get('/user/:id', md_auth.ensureAuth, UserController.getUser);

router.post('/user', md_auth.ensureAuth, UserController.insertUser);

router.put('/user/:id', md_auth.ensureAuth, UserController.updateUser);

router.delete('/user/:id', md_auth.ensureAuth, UserController.deleteUser);

module.exports = router;