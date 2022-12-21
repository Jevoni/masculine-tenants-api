const Quote = require('../models/Quote')

exports.getQuotes = (req, res, next) => {
    Quote.find()
        .then(quotes => {
            res.send(quotes)
        });
};

exports.getQuote = (req, res, next) => {
    Quote.find({ index: req.params.index })
        .then(quote => {
            res.send(quote)
        })
};

exports.getRandomQuote = (req, res, next) => {
    const randomIndex = 1 + (Math.floor(Math.random() * 82));
    console.log(randomIndex)
    Quote.find({ index: randomIndex })
        .then(quote => {
            res.send(quote)
        })
}

exports.addQuote = (req, res, next) => {
    // const totalQuotes = Quote.length
    const quote = new Quote({
        index: req.body.index,
        quote: req.body.quote,
        author: req.body.author
    })
    quote.save()
        .catch(err => {
            console.log(err)
        })
    res.send("Quote added!")
}

exports.editQuote = (req, res, next) => {
    Quote.findOne({ index: req.params.index })
        .then(quote => {
            quote.index = req.body.index;
            quote.quote = req.body.quote;
            quote.author = req.body.author;
            return quote.save()
        })
        .then(result => {
            res.send(result);
        })
}