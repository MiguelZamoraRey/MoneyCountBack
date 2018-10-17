var mongoose = require('mongoose');
var account  = mongoose.model('account');

function getAllAccounts(req, res){
    account.find(function(err, accounts) {
        if(err){
            res.send(500, err.message); 
        }
        res.status(200).jsonp(accounts);
    })
}

function getAccount(req, res){
    account.findById(req.params.id, function(err, account) {
        if(err){
            res.send(500, err.message); 
        }
        res.status(200).jsonp(account);
    });
}

function insertAccount(req, res){
    console.log(req.body)
    const newAccount = new account(req.body);
    newAccount.save(err => {
        if (err){
            return res.status(500).send(err);   
        } 
        return res.status(200).send(newAccount);
    });
}

function updateAccount(req,res){
    account.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, account) => {
            if (err){
                return res.status(500).send(err);   
            } 
            return res.send(account);
        }
    )
}

function deleteAccount(req,res){
    account.deleteOne({ _id: req.params.id }, function (err) {
        if(err){
            res.send(500, err.message); 
        }
        res.send(200,"account deleted")
    });
}

module.exports ={
    getAllAccounts,
    getAccount,
    insertAccount,
    updateAccount,
    deleteAccount
}