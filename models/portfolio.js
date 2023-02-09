
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const whatIsTruthSchema = require("./Series/What-is-Truth");
const AnAncientDreamSchema = require("./Series/An-Ancient-Dream");
const RevelationsGPS = require("./Series/Revelations-GPS");

const portfolioSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    what_is_truth_free: [whatIsTruthSchema],
    an_ancient_dream: [AnAncientDreamSchema],
    revelations_gps: [RevelationsGPS],
},
    {
        timestamps: true,
    }

);


module.exports = mongoose.model('Portfolio', portfolioSchema);