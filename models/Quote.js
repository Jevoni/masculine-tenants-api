const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    index: {
        type: Number,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    author: String
});

module.exports = mongoose.model('Quote', QuoteSchema)