const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

const quoteRoute = require('./routes/quote')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-ALlow-Headers', 'Content-Type')
    next();
})

app.use('/quote', quoteRoute)

app.get('/', (req, res) => {
    res.send('We are home!');
});
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Jevoni:T9zfuHDidicpnMHZ@cluster0.sgynhsa.mongodb.net/masculine-tenants', () =>
    console.log('Connected to DB!'));

app.listen(3000);