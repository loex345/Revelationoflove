const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevelationsSpiritofProphecySchema = new Schema({

'18-1-1-deceive': String,
'18-1-2-elect': String,
'18-1-3-false': String,
'18-2-1-testimony': String,
'18-2-2-prophecy': String,
'18-3-1-prophets': String,
'18-3-2-evangelists': String,
'18-3-3-teachers': String,
'18-3-4-perfecting': String,
'18-3-5-faith': String,
'18-3-6-knowledge': String,
'18-3-7-fulness': String,
'18-3-8-Christ': String,
'18-3-9-coming': String,
'18-4-1-prosper': String,
'18-5-1-mocked': String,
'18-5-2-despised': String,
'18-5-3-misused': String,
'18-5-4-perish': String,
'18-5-5-prophesyings': String,
'18-5-6-Prove': String,
'18-6-1-pass': String,
'18-6-2-hearken': String,
'18-6-3-me': String,
'18-6-4-confesseth': String,
'18-6-5-Jesus': String,
'18-6-6-law': String,
'18-6-7-testimony': String,
'18-6-8-fruits': String,

},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('RevelationsSpiritofProphecySchema ', RevelationsSpiritofProphecySchema );