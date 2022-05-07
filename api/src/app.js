
const express = require('express');
const cors = require('cors')

const app = express();

const studentRoute = require('./routers/students');
const bodyParser = require('body-parser');

app.use(express.urlencoded({extends: true}))
app.use(express.json());
app.use(bodyParser.json({ type: 'application/json'}));
// app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors())

app.use(studentRoute)
// app._router.use('/students/', studentRoute);

module.exports = app;
