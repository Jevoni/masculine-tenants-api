const express = require('express');
const router = express.Router();

const quotesController = require('../controllers/quoteController')

router.get('/random', quotesController.getRandomQuote)

router.get('/:index', quotesController.getQuote);

router.get('/', quotesController.getQuotes);

router.post('/', quotesController.addQuote);

router.patch('/:index', quotesController.editQuote)

module.exports = router; 