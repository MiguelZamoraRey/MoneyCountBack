var mongoose = require('mongoose');
var operation  = mongoose.model('operation');
var express = require('express');
var router = express.Router();

var md_auth = require('../middleware/autenticated');

var OperationController = require('../controllers/operationController');

router.get('/operations', md_auth.ensureAuth, OperationController.getAllOperations);

router.get('/operation/:id', md_auth.ensureAuth, OperationController.getOperation);

router.post('/operation', md_auth.ensureAuth, OperationController.insertOperation);

router.put('/operation/:id', md_auth.ensureAuth, OperationController.updateOperation);

router.delete('/operation/:id', md_auth.ensureAuth, OperationController.deleteOperation);

module.exports = router;