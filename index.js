const express = require('express');
const app = express();

require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection({
    database: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
});

app.get('/card', (req, res) => {
    connection.query('SELECT id,category,question,answer FROM cards ORDER BY RAND() LIMIT 1', (err, results) => {
        let output = {
            id: results[0].id,
            category: results[0].category,
            question: results[0].question,
            answer: results[0].answer,
        };

        res.json(output);
    });
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000);