const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const reviewSchema = new Schema({
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

    imageUrl: {
        type: String
    },

    description: {
        type: String,
        required: true
    },

    creatorId: {
        type: ObjectId,
        ref: "User",
        required: true
    },
});

module.exports = new Model('Review', reviewSchema);