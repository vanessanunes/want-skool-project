
const express = require('express');
const cors = require('cors')

const app = express();

const studentRoute = require('./routers/students');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extends: true}));

app.use(express.json());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(express.urlencoded({ extended: true}));

app.use(cors());

app.use(studentRoute);

module.exports = app;
