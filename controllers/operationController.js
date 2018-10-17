var mongoose = require('mongoose');
var operation  = mongoose.model('operation');

function getAllOperations(req, res){
    operation.find(function(err, operations) {
        if(err){
            res.send(500, err.message); 
        }
        res.status(200).jsonp(operations);
    })
}

function getOperation(req, res){
    operation.findById(req.params.id, function(err, operation) {
        if(err){
            res.send(500, err.message); 
        }
        res.status(200).jsonp(operation);
    });
}

function insertOperation(req, res){
    console.log(req.body)
    const newOperation = new operation(req.body);
    newOperation.save(err => {
        if (err){
            return res.status(500).send(err);   
        } 
        return res.status(200).send(newOperation);
    });
}

function updateOperation(req,res){
    operation.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, operation) => {
            if (err){
                return res.status(500).send(err);   
            } 
            return res.send(operation);
        }
    )
}

function deleteOperation(req,res){
    operation.deleteOne({ _id: req.params.id }, function (err) {
        if(err){
            res.send(500, err.message); 
        }
        res.send(200,"operation deleted")
    });
}

module.exports ={
    getAllOperations,
    getOperation,
    insertOperation,
    updateOperation,
    deleteOperation
}