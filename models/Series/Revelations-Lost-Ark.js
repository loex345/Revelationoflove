const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RevelationsLostArkSchema = new Schema({

    '4-1-1-reward': String,
'4-1-2-works': String,
'4-1-3-reward': String,
'4-1-4-judge': String,
'4-1-5-heaven': String,
'4-1-6-judgment': String,
'4-1-7-books': String,
'4-1-8-judgment': String,
'4-3-2-two': String,
'4-3-3-three': String,
'4-4-1-pattern': String,
'4-4-2-cleanse': String,
'4-4-3-his': String,
'4-4-4-blood': String,
'4-4-5-blood': String,
'4-4-6-purified': String,
'4-4-7-better': String,
'4-4-8-appear': String,
'4-4-9-minister': String,
'4-6-1-day': String,
'4-6-2-year': String,
'4-6-3-day': String,
'4-6-4-year': String,
'4-7-1-thy': String,
'4-7-2-thy': String,
'4-8-1-command': String,
'4-8-2-restore': String,
'4-8-3-build': String,
'4-9-1-seven': String,
'4-9-2-threescore': String,
'4-9-3-two': String,
'4-10-1-fifteenth': String,
'4-10-2-Jesus': String,
'4-11-1-confirm': String,
'4-11-2-testament': String,
'4-11-3-time': String,
'4-11-4-due': String,
'4-11-5-cease': String,
'4-12-1-always': String,
'4-12-2-standing': String,
'4-12-3-judge': String,
'4-13-1-is': String,
'4-13-2-come': String,
'4-13-3-advocate': String,
'4-13-4-propitiation': String,
'4-13-5-world': String,
'4-13-6-liveth': String,
'4-13-7-intercession': String,
'4-13-8-save': String,

},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('RevelationsLostArk', RevelationsLostArkSchema);