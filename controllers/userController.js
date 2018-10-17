var mongoose = require('mongoose');
var user  = mongoose.model('user');

function getAllUsers(req, res){
    user.find(function(err, users) {
        if(err){
            res.send(500, err.message); 
        }
        res.status(200).jsonp(users);
    })
}

function getUser(req, res){
    user.findById(req.params.id, function(err, users) {
        if(err){
            res.send(500, err.message); 
        }
        res.status(200).jsonp(users);
    });
}

function insertUser(req, res){
    console.log(req.body)
    const newUser = new user(req.body);
    newUser.save(err => {
        if (err){
            return res.status(500).send(err);   
        } 
        return res.status(200).send(newUser);
    });
}

function updateUser(req,res){
    user.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, user) => {
            if (err){
                return res.status(500).send(err);   
            } 
            return res.send(user);
        }
    )
}

function deleteUser(req,res){
    user.deleteOne({ _id: req.params.id }, function (err) {
        if(err){
            res.send(500, err.message); 
        }
        res.send(200,"user deleted")
    });
}

module.exports ={
    getAllUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser
}