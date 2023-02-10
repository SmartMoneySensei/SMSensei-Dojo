const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

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

app.get('/forex', (req,res) => {
    res.sendFile(path.join(initialPath, "forex.html"));
})

app.get('/learn', (req,res) => {
    res.sendFile(path.join(initialPath, "learn.html"));
})


app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})
