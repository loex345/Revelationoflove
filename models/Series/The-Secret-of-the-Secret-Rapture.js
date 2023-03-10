const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theSecretOfTheSecretRaptureSchema = new Schema({

    '6-1-1-husband': String,
    '6-1-2-away': String,
    '6-1-3-espoused': String,
    '6-1-4-virgin': String,
    '6-1-5-Christ': String,
    '6-1-6-married': String,
    '6-2-1-dwell': String,
    '6-3-1-observation': String,
    '6-3-2-you': String,
    '6-3-4-not': String,
    '6-3-5-world': String,
    '6-4-1-knock': String,
    '6-4-2-open': String,
    '6-4-3-body': String,
    '6-4-4-in': String,
    '6-4-5-you': String,
    '6-4-6-bought': String,
    '6-4-7-price': String,
    '6-4-8-body': String,
    '6-5-1-prepared': String,
    '6-5-2-waiteth': String,
    '6-5-3-mansions': String,
    '6-5-4-prepare': String,
    '6-5-5-place': String,
    '6-5-6-receive': String,
    '6-6-1-deceive': String,
    '6-6-2-Christ': String,
    '6-6-3-deceive': String,
    '6-6-4-Christs': String,
    '6-6-5-prophets': String,
    '6-6-7-deceive': String,
    '6-6-8-transformed': String,
    '6-6-9-light': String,
    '6-7-1-lightning': String,
    '6-7-2-eye': String,
    '6-7-2-see': String,
    '6-7-4-heaven': String,
    '6-7-5-manner': String,
    '6-7-5-all': String,
    '6-7-7-angels': String,
    '6-7-8-angels': String,
    '6-7-9-shout': String,
    '6-7-10-trump': String,
    '6-7-11-up': String,
    '6-7-12-changed': String,
    '6-7-14-incorruption': String,
    '6-7-15-incorruption': String,
    '6-7-16-change': String,
    '6-7-17-body': String,
    '6-7-18-his': String,
    '6-9-1-thief': String,
    '6-9-2-watch': String,
    '6-9-3-thief': String,
    '6-9-4-hour': String,
    '6-9-5-watcheth': String,
    '6-9-6-garments': String,
    '6-10-1-down': String,
    '6-10-2-low': String,
    '6-10-3-fear': String,
    '6-10-4-glory': String,
    '6-10-5-idols': String,
    '6-5-6-worship': String,
    '6-10-7-always': String,
    '6-10-8-ready': String,
    '6-10-9-righteousness': String,
    isComplete: { type: Boolean, default: false }
},
    {
        timestamps: true,
    }
);

module.exports.theSecretOfTheSecretRaptureSchema = theSecretOfTheSecretRaptureSchema

module.exports.theSecretOfTheSecretRaptureModel = mongoose.model('theSecretOfTheSecretRapture', theSecretOfTheSecretRaptureSchema);