const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    gender: {
        type: [String],
        required: true
    },
    
}, {
    timestamps: true
});

module.exports = model('movie', movieSchema);