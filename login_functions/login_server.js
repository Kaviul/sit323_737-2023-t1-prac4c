require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const fs = require('fs');



const authRoute = require('./Routes/auth')
//const UserSignUpRoute = require('./Routes/usersignup');

//const url =  "mongodb+srv://kaviuln1:kaviuln@kncluster-1.ieurp6n.mongodb.net/?retryWrites=true&w=majority"
//const url =  "mongodb+srv://kaviul:kaviuln@safehome.tqfgm2a.mongodb.net/safehome?retryWrites=true&w=majority"
//const url = "mongodb+srv://kaviuln1335:kaviuln@kncluster-1.ieurp6n.mongodb.net/?retryWrites=true&w=majority"
const url = "mongodb+srv://kaviuln1335:kaviuln@cluster0.hcagxgu.mongodb.net/?retryWrites=true&w=majority"
try{
mongoose.connect(url, {useUnifiedTopology: true},
    () => console.log("Mongoose connected"),
    );
} catch (e) {
    console.log("Mongoose not connected!");
}
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log("Database Connection Established!")
})


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname+'/login_design'));
app.use('/', authRoute)
//app.use('/api/SignUp', UserSignUpRoute)


const port= process.env.port || 3000

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/login_design/login.html');
})

app.listen(port, ()=> {
    console.log("Server is listening on: ", port)

})


  


