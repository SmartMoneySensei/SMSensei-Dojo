const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const { response } = require('express');
require('dotenv').config()

const db = knex({
    client: 'pg',
    connection: {
        
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Zarian',
        database: 'dojo'
    }
})

const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
})

app.get('/learn', (req, res) => {
    res.sendFile(path.join(intialPath, "forex.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(intialPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(intialPath, "register.html"));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(intialPath, "contact.html"));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(intialPath, "about.html"));
})

app.get('/mind', (req, res) => {
    res.sendFile(path.join(intialPath, "sentimental.html"));
})

app.get('/skill', (req, res) => {
    res.sendFile(path.join(intialPath, "technical.html"));
})

app.get('/research', (req, res) => {
    res.sendFile(path.join(intialPath, "fundamental.html"));
})

app.get('/thankyou', (req, res) => {
    res.sendFile(path.join(intialPath, "thankyou.html"));
})

app.post('/register-user', (req, res) => {
    const { name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){
        res.json('fill all the fields');
    } else{
        db("users").insert({
            name: name,
            email: email,
            password: password
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('Apologies but another user used this email already🤷🏾‍♂️');
            }
        })
    }
})

app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    db.select('name', 'email')
    .from('users')
    .where({
        email: email,
        password: password,
        // booking_start_time: booking_start_time
    })
    .then(data => {
        if(data.length){
            res.json(data[0]);
        } else{
            res.json('Their was an slight hiccup within the Username or Password🤦🏾‍♂️');
        }
    })
})

 // 3000 is the port number in my case.
 app.listen(3000, function() {
    console.log("Welcome to The Secret DOJO located on PORT " + 3000)
});
