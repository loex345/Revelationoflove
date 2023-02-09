const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const revelationEternalSignofLoveSchema = new Schema({

'7-1-1-God': String,
'7-1-2-not': String,
'7-1-3-love': String,
'7-1-4-boldness': String,
'7-1-5-hearts': String,
'7-1-6-minds': String,
'7-1-7-true': String,
'7-1-8-faith': String,
'7-1-9-love': String,
'7-1-10-fufilling': String,
'7-1-11-law': String,
'7-2-1-whirlwind': String,
'7-2-2-soweth': String,
'7-2-3-law': String,
'7-3-1-earth': String,
'7-4-1-truth': String,
'7-4-2-knowledge': String,
'7-4-3-knowledge': String,
'7-4-4-forgotten': String,
'7-4-5-break': String,
'7-4-6-blinded': String,
'7-5-1-duty': String,
'7-6-1-he': String,
'7-6-2-stone': String,
'7-6-3-God': String,
'7-6-4-ark': String,
'7-6-5-ten': String,
'7-6-6-writing': String,
'7-6-7-book': String,
'7-6-8side': String,
'7-6-9-against': String,
'7-7-1-handwriting': String,
'7-7-2-ordinances': String,
'7-7-3-meat': String,
'7-7-4-drink': String,
'7-7-5-holyday': String,
'7-7-6-days': String,
'7-7-7-ordinances': String,
'7-7-8-law': String,
'7-7-9-forbid': String,
'7-7-10-ungodliness': String,
'7-7-11-lusts': String,
'7-7-12-godly': String,
'7-7-13-establish': String,
'7-8-1-lawless': String,
'7-8-2-disobedient': String,
'7-8-3-sinners': String,
'7-8-4-gospel': String,
'7-9-1-commandments': String,

},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('revelationEternalSignofLove', revelationEternalSignofLoveSchema);