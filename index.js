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

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// GET /categories - list all categories in the system
// GET /card - get a random card
// GET /card/:category - get a random card from the category
// GET /cards/ - get a list of all cards
// GET /cards/:category - get a list of all cards in :category
// POST /card - create a new card.

app.get('/categories', (req, res) => {
    connection.query('SELECT distinct(category) FROM cards ORDER by category', (err, results) => {
        let cats = [];
        for ( let i = 0; i < results.length; i++ ) {
            cats.push(results[i].category);
        }
        res.json(cats);
    });
});

app.get('/cards', (req, res) => {
    connection.query('SELECT id,category,question FROM cards ORDER BY category,id', (err, results) => {
        res.json(results);
    });
});
app.get('/cards/:category', (req, res) => {
    connection.query('SELECT id,category,question FROM cards WHERE category = ? ORDER BY id', [req.params.category], (err, results) => {
        res.json(results);
    });
});

app.post('/card', (req, res) => {
    let category = req.body.category;
    let question = req.body.question;
    let answer = req.body.answer;

    connection.query('INSERT INTO cards (category, question, answer) VALUES (?, ?, ?)', [category, question, answer], (err, results) => {
        res.json({ id: results.insertId, category: category, quwestion: question, answer: answer });
    });
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

app.get('/card/:category', (req, res) => {
    connection.query('SELECT id,category,question,answer FROM cards WHERE category = ? ORDER BY RAND() LIMIT 1', [req.params.category], (err, results) => {
        let output = {
            id: results[0].id,
            category: results[0].category,
            question: results[0].question,
            answer: results[0].answer,
        };

        res.json(output);
    });
});

app.listen(process.env.PORT || 3000);