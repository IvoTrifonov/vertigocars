const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const carSchema = new Schema({
    make: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    horsepower: {
        type: String,
        required: true
    },

    mileage: {
        type: String,
        required: true
    },

    engine: {
        type: String,
        required: true
    },

    cubicCapacity: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    euroStandard: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    ownerId: {
        type: String,
        required: true
    }
});

module.exports = new Model('Car', carSchema);