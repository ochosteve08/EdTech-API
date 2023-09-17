/* eslint-disable indent */
const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: Array,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true,
    }],
    topics: [{
        type: Array,
        required: true,
    }],
    createdBy: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: String,
        enum: ['Begineer', 'Intermediate', 'Advance'],
        required: true,
    },
    deadline: {
        type: Date,

    },
    marks: {
        type: Number,
    },
});

const AssignmentsModel = mongoose.model('assignments', AssignmentSchema);

module.exports = AssignmentsModel;
