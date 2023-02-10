
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const {whatIsTruthSchema} = require(".././models/Series/What-is-Truth.js");
const {AnAncientDreamSchema} = require("./Series/An-Ancient-Dream");


const portfolioSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    what_is_truth_free:[whatIsTruthSchema],
    an_ancient_dream: [AnAncientDreamSchema],

},
    {
        timestamps: true,
    }

);


module.exports = mongoose.model('Portfolio', portfolioSchema);