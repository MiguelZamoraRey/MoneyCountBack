var mongoose = require('mongoose');
var user  = mongoose.model('user');
var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController');

router.get('/users', UserController.getAllUsers);

router.get('/user/:id', UserController.getUser);

router.post('/user', UserController.insertUser);

router.put('/user/:id', UserController.updateUser);

router.delete('/user/:id', UserController.deleteUser);

module.exports = router;