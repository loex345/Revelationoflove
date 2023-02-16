const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const israelinBibleProphecySchema = new Schema({

    '5-1-1-enmity': String,
    '5-1-2-head': String,
    '5-1-3-heel': String,
    '5-1-4-skull': String,
    '5-1-5-Golgotha': String,
    '5-1-6-Calvary': String,
    '5-3-1-nation': String,
    '5-3-2-families': String,
    '5-3-3-blessed': String,
    '5-3-5-Abraham': String,
    '5-3-4-gospel': String,
    '5-5-1-cross': String,
    '5-5-2-cross': String,
    '5-5-3-power': String,
    '5-6-1-seed': String,
    '5-7-1-Christ': String,
    '5-9-1-forgiven': String,
    '5-9-2-covered': String,
    '5-9-3-iniquity': String,
    '5-9-4-guile': String,
    '5-10-1-power': String,
    '5-10-2-God': String,
    '5-11-1-son': String,
    '5-11-2-firstborn': String,
    '5-11-3-son': String,
    '5-11-4-afflicted': String,
    '5-11-5-saved': String,
    '5-11-6-redeemed': String,
    '5-11-7-carried': String,
    '5-11-8-carry': String,
    '5-11-9-bear': String,
    '5-11-10-deliver': String,
    '5-12-1-thee': String,
    '5-12-2-power': String,
    '5-12-3-declared': String,
    '5-12-4-know': String,
    '5-12-5-Lord': String,
    '5-12-6-bless': String,
    '5-13-1-Baalim': String,
    '5-13-2-images': String,
    '5-13-3-arms': String,
    '5-13-4-healed': String,
    '4-13-5-love': String,
    '5-13-6-backsliding': String,
    '5-13-8-exalt': String,
    '5-13-7-none': String,
    '5-14-1-help': String,
    '5-14-2-king': String,
    '5-14-4-Bethel': String,
    '4-14-4-king-s': String,
    '5-17-1-firstborn': String,
    '4-17-2-son': String,
    '4-17-3-pleased': String,
    '5-18-1-twelve': String,
    '5-18-2-tribes': String,
    '5-18-3-unbelief': String,
    '5-18-4-faith': String,
    '5-18-5-inwardly': String,
    '5-18-6-one': String,
    '5-18-8-heirs': String,
    '5-18-9-commandments': String,
    '5-18-10-inwardly': String,
    '5-18-11-heart': String,
    '5-19-7-seed': String,
    '5-19-1-love': String,
    '5-19-2-heart': String,
    '5-19-3-soul': String,
    '5-20-1-not': String,
    '5-20-2-world': String,
    '5-20-3-not': String,
    '5-20-3-not-2': String,
    '5-20-3-King': String,
    '5-21-1-thy': String,
    isComplete: { type: Boolean, default: false }
},
    {
        timestamps: true,
    }
);

module.exports.israelinBibleProphecySchema = israelinBibleProphecySchema

module.exports.israelinBibleProphecyModel = mongoose.model('IsraelinBibleProphecy', israelinBibleProphecySchema);