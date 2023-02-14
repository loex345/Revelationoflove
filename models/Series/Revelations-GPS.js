const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const revelationsGPsSchema = new Schema({

'3-1-2-bruise': String,
'3-1-1-head': String,
'3-1-3-skull': String,
'3-1-3-skull-2': String,
'3-1-3-Calvary': String,
'3-3-1-Sanctuary': String,
'3-5-4-bread': String,
'3-5-1-himself': String,
'3-5-2-sprinkled': String,
'3-5-3-washed': String,
'3-5-5-prayer': String,
'3-5-6-light': String,
'3-5-6-1-light': String,
'3-5-6-1-light-2': String,
'3-5-7-men': String,
'3-5-8-purifieth': String,
'3-5-9-blood': String,
isComplete: { type: Boolean, default: false }

},
    {
        timestamps: true,
    }
);

module.exports.revelationsGPsSchema = revelationsGPsSchema

module.exports.revelationsGPsModel = mongoose.model('RevelationsGPS', revelationsGPsSchema);