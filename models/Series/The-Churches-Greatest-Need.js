const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theChurchesGreatestNeedSchema = new Schema({

    '20-2-1-stars': String,
    '20-2-2-angels': String,
    '20-2-3-candlesticks': String,
    '20-2-4-churches': String,
    '20-2-5-messenger': String,
    '20-4-1-cold': String,
    '20-4-2-hot': String,
    '20-4-3-wretched': String,
    '20-4-4-miserable': String,
    '20-4-5-poor': String,
    '20-4-6-blind': String,
    '20-4-7-naked': String,
    '20-5-1-spue': String,
    '20-6-1-door': String,
    '20-6-2-knock': String,
    '20-7-1-buy': String,
    '20-7-2-anoint': String,
    '20-8-1-hearken': String,
    '20-8-2-incline': String,
    '20-8-3-hear': String,
    '20-8-4-sup': String,
    '20-8-5-sit': String,
    '20-8-6-throne': String,
},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('theChurchesGreatestNeedSchema', theChurchesGreatestNeedSchema);