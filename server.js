var express = require('express');
var app = express();
var fs = require('fs');

const Port = 3020;

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/calculator.html');
})

app.listen(Port, () => {
    console.log("Calculator is live at: ", Port)
})

//res.sendFile(__dirname+'/design/login.html');