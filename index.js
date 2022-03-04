const express = require('express');
const app = express();

require('dotenv').config();

const mysql = require('mysql2');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000);