const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const revelationsMissUniverseSchema = new Schema({

    '16-1-1-you': String,
    '16-1-2-husband': String,
    '16-1-3-married': String,
    '16-1-4-wife': String,
    '16-2-1-church': String,
    '16-2-2-pillar': String,
    '16-2-3-ground': String,
    '16-2-4-truth': String,
    '16-3-1-out': String,
    '16-3-2-country': String,
    '16-3-3-church': String,
    '16-3-4-wilderness': String,
    '16-4-1-fewest': String,
    '16-4-2-commandments': String,
    '16-4-3-remnant': String,
    '16-4-remnant': String,
    '16-5-1-commandmenets': String,
    '16-5-2-testimony': String,
    '16-6-1-gospel': String,
    '16-6-2-pervert': String,
    '16-6-3-accursed': String,
    '16-6-4-persuade': String,
    '16-6-5-pleased': String,
    '16-6-6-tradition': String,
    '16-6-7-tradition': String,
    '16-6-8-mouth': String,
    '16-6-9-heart': String,
    '16-6-10-gospel': String,
    '16-6-11-power': String,
    '16-6-12-endure': String,
    '16-6-13-this': String,
    '16-6-14-witness': String,
    '16-7-1-everlasting': String,
    '16-7-2-patience': String,
    '16-7-3-commandments': String,
    '16-7-4-faith': String,
    '16-8-1-preach': String,
    '16-8-2-commandments': String,
    '16-8-3-worship': String,
    '16-8-4-glory': String,
    '16-8-3-1-judgement': String,
    '16-8-5-worship': String,
    '16-8-6-beast': String,
    '16-8-7-image': String,
    '16-8-8-forehead': String,
    '16-8-9-hand': String,
    '16-8-10-testomony': String,
    '16-9-11-dead': String,
    '16-9-12-rest': String,
    '16-9-13-cloud': String,
    '16-9-14-one': String,
    '16-8-16-preach': String,
    '16-8-17-every': String,
    '16-8-15-fallen': String,
    '16-9-1-sheep': String,
    '16-9-2-follow': String,
    '16-9-3-know': String,
    '16-9-4-bring': String,
    '16-9-5-one': String,
    isComplete: { type: Boolean, default: false }
},
    {
        timestamps: true,
    }
);

module.exports.revelationsMissUniverseSchema = revelationsMissUniverseSchema

module.exports.revelationsMissUniverseModel = mongoose.model('RevelationsMissUniverse', revelationsMissUniverseSchema );