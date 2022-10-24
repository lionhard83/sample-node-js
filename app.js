const express = require('express');
const app = express();
bodyParser = require('body-parser');
const package = require('./users');

console.log(package.users[0]);
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/status', (req, res) => {
    res.status(400).json({message: 'Server is running!'});
})

app.post('/status', (req, res) => {
    console.log('req.body:', req.body);
    res.json({message: 'Server is running!'});
})

app.get('/users', (req, res) => {
    res.json({message: 'Hello Users'});
    console.log("ciao");
});

// users/2
// users/3
// users/vattelapesca
// users/pincopallo

app.get('/users/vattelapesca', (req, res) => {
    res.json({message: 'Hello Users'});
});

app.get('/users/:id', (req, res) => {
    res.json({message: 'Hello Users'});
});



app.get('/employees', (req, res) => {
    res.json({message: 'Hello Employees'});
});
// stringa, 

// un intero che rappresenta la porta di ascolto
// si aspetta un numero
app.listen(3000, () => {
    console.log('Server is up!');
});