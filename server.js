const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const { response } = require('express');

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


app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})
