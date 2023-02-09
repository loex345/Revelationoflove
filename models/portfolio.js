const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    what_is_truth_free: {type: Schema.Types.ObjectId, ref: 'WhatIsTruth'}
},
    {
        timestamps: true,
    }

);


module.exports = mongoose.model('Portfolio', portfolioSchema);