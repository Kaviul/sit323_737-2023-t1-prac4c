const User = require('../Model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const express = require('express')
var app = express();

const register = (req,res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
        let user = new User ({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: hashedPass
            
        })
        user.save()
        .then(user => {
            res.json({
                message: user + 'added successfully!'
            })
        })
        .catch(error => {res.json({
            message: "An error occured!"
    
        })
    })
})

}

const index = async (req, res, next) => {
   await User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error has occured!'
        })
    })
}

const update = async (req, res, next) => {
   let UserID = req.body.UserID

    let updateData = {
       name: req.body.name,
       email: req.body.email,
       phone: req.body.phone,
       password: req.body.password

    }

    User.findByIdAndUpdate(UserID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'User updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured!"
        })
    })
}

const login = (req, res, next) => {
    var email = req.body.email
    var password = req.body.password

    User.findOne({$or: [{email:email}, {phone:email}] })
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    res.json({error: err})
                }
                if(result){
                   let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '2h'})
                   res.json({message:"Login Successful! ", token})
                //      app.get('', function(req, res) {
                //      res.sendFile(__dirname, './public/calculator.html');
                //    });
          

                    
                }
                else{
                    res.json({
                        message: "Email or Password Invalid!"
                    })
                }

            })

        }
        else {
            res.json({message: 'No user found!'})
        }
    })
    .catch(error => {
        res.json({
            message:"No user found!"
        })
    })


}

module.exports = {login, register, index, update}
