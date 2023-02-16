const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theMarkOfTheBeastSchema = new Schema({

    '17-1-1-worship': String,
    '17-2-1-slew': String,
    '17-1-3-mark': String,
    '17-2-3-mark': String,
    '17-2-4-mark': String,
    '17-3-1-foreheads': String,
    '17-3-2-heart': String,
    '17-3-3-soul': String,
    '17-3-4-mind': String,
    '17-3-5-commandments': String,
    '17-4-1-law': String,
    '17-4-2-laws': String,
    '17-4-3-mind': String,
    '17-4-4-hearts': String,
    '17-4-5-write': String,
    '17-4-6-thinketh': String,
    '17-4-7-heart': String,
    '17-4-8-name': String,
    '17-4-9-foreheads': String,
    '17-5-1-Remember': String,
    '17-5-2-sabbath': String,
    '17-5-3-God': String,
    '17-5-4-hallowed': String,
    '17-6-1-sabbaths': String,
    '17-6-2-sing': String,
    '17-6-3-sabbaths': String,
    '17-6-4-sign': String,
    '17-6-4-1-sign': String,
    '17-7-1-times': String,
    '17-7-1-times-2': String,
    '17-7-2-laws': String,
    '17-7-3-man': String,
    '17-11-1-mark': String,
    '17-11-2-name': String,
    '17-12-1-Remember': String,
    '17-12-2-worship': String,
    '17-12-3-beast': String,
    '17-12-4-image': String,
    '17-12-5-wrath': String,
    isComplete: { type: Boolean, default: false }
},
    {
        timestamps: true,
    }
);

module.exports.theMarkOfTheBeastSchema = theMarkOfTheBeastSchema;

module.exports.theMarkOfTheBeastModel = mongoose.model('theMarkOfTheBeast', theMarkOfTheBeastSchema);