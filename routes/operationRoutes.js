var mongoose = require('mongoose');
var operation  = mongoose.model('operation');
var express = require('express');
var router = express.Router();

var OperationController = require('../controllers/operationController');

router.get('/operations', OperationController.getAllOperations);

router.get('/operation/:id', OperationController.getOperation);

router.post('/operation', OperationController.insertOperation);

router.put('/operation/:id', OperationController.updateOperation);

router.delete('/operation/:id', OperationController.deleteOperation);

module.exports = router;