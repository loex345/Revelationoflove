const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HowtoPostponeYourFuneralSchema = new Schema({

    '11-1-1-rebuke': String,
    '11-1-2-chasten': String,
    '11-1-3-correcteth': String,
    '11-1-4-love': String,
    '11-1-4-love-2': String,
    '11-1-6-faith': String,
    '11-1-7-gift': String,
    '11-1-8-ungodliness': String,
    '11-1-9-lusts': String,
    '11-1-10-righteously': String,
    '11-2-5-godly': String,
    '11-3-1-health': String,
    '11-4-1-wicked': String,
    '11-4-2-foolish': String,
    '11-4-3-before': String,
    '11-4-4-defileth': String,
    '11-4-5-written': String,
    '11-5-1-body': String,
    '11-5-2-spirit': String,
    '11-5-3-eat': String,
    '11-5-4-drink': String,
    '11-5-5-do': String,
    '11-5-6-glory': String,
    '11-5-8-sacrifice': String,
    '11-5-8-conformed': String,
    '11-5-9-transformed': String,
    '11-7-1-grace': String,
    '11-7-2-given': String,

},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('HowtoPostponeYourFuneralSchema', HowtoPostponeYourFuneralSchema);