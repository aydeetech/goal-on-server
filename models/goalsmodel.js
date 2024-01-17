const mongoose = require('mongoose');
const Schema = mongoose.Schema

const goalSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
        required: true,
    },

    progress: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 100,
    }
},
{timestamps: true})


// Model each document on the schema

module.exports = mongoose.model('Goal', goalSchema);