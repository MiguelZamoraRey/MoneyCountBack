var mongoose = require('mongoose');
var user  = mongoose.model('user');
var bcrypt = require('bcrypt-nodejs');
var jwtService = require('../utils/jwt');

function loginUser(req,res){
    var params = req.body;    
    var email = params.email;
    var password = params.pass;
    
    user.findOne({email:email}, (err,user)=>{
        if(err){
            res.status(500).send({
                message: "Error in login"
            });
        }
        if(user){
            console.log(password+" "+user.pass)
            bcrypt.compare(password, user.pass, (err,check)=>{
                if(check){
                    if(params.token){
                        return res.status(200).send({
                            token: jwtService.createToken(user)
                        });
                    }else{
                        user.password = undefined;
                        return res.status(200).send({
                            user
                        });
                    }
                }else{
                    return res.status(404).send({
                        message: "The user can't be identified"
                    });
                }
            })
        }else{
            return res.status(404).send({
                message: "The user can't be identified"
            });
        }
    });
}

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
    var params = req.body;
    const newUser = new user(req.body);

    bcrypt.hash(params.pass,null,null, (err, hash)=>{
        newUser.pass = hash;
        newUser.save((err,userStored)=>{
            if(err){
                return res.status(500).send({message:"Error when saving user"});
            }
            if(newUser){
                res.status(200).send({
                    user: newUser
                });
            }else{
                res.status(404).send({
                    message:"The user has not been registered"
                });
            }
        });
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
    loginUser,
    getAllUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser
}