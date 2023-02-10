const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aNewYouSchema = new Schema({

    '14-1-1-not': String,
    '14-1-2-prisoners': String,
    '14-1-3-stronger': String,
    '14-1-4-freely': String,
    '14-2-1-blood': String,
    '14-3-1-water': String,
    '14-3-2-baptism': String,
    '14-3-3-sea': String,
    '14-3-4-baptized': String,
    '14-4-1-fufil': String,
    '14-4-2-righteousness': String,
    '14-4-3-up': String,
    '14-4-4-water': String,
    '15-5-1-Buried': String,
    '14-5-2-risen': String,
    '14-5-3-dead': String,
    '14-5-3-dead-2': String,
    '14-6-1-water': String,
    '14-6-2-Spirit': String,
    '14-6-3-enter': String,
    '14-7-1-death': String,
    '14-7-2-baptism': String,
    '14-7-3-newness': String,
    '14-7-4-life': String,
    '14-7-5-crucified': String,
    '14-7-6-serve': String,
    '14-7-7-dead': String,
    '14-7-8-new': String,
    '14-7-9-passed': String,
    '14-7-10-new': String,
    '14-8-1-teach': String,
    '14-8-2-Teaching': String,
    '14-8-5-Christ': String,
    '14-8-6-provision': String,
    '14-8-5-believeth': String,
    '14-8-4-Believeth': String,
    '14-9-1-baptized': String,
    '14-9-2-sins': String,
    '14-10-1-cannot': String,
    '14-10-2-kingdom': String,
    '14-10-3-water': String,
    '14-10-4-Spirit': String,
    '14-10-4-Spirit-2': String,
    isComplete: { type: Boolean, default: false }
},
    {
        timestamps: true,
    }
);

module.exports.aNewYouSchema = aNewYouSchema

module.exports.aNewYouModel = mongoose.model('ANewYou', aNewYouSchema);