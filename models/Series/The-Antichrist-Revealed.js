const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theAntichristRevealedSchema = new Schema({

    '10-1-1-lion': String,
    '10-1-2-bear': String,
    '10-1-3-leopard': String,
    '10-1-4-beast': String,
    '10-1-5-terrible': String,
    '10-1-6-diverse': String,
    '10-1-7-ten': String,
    '10-2-1-horn': String,
    '10-2-2-eyes': String,
    '10-2-3-mouth': String,
    '10-3-1-among': String,
    '10-3-2-after': String,
    '10-3-3-little': String,
    '10-3-4-three': String,
    '10-3-5-man': String,
    '10-3-6-diverse': String,
    '10-3-7-great': String,
    '10-3-8-words': String,
    '10-3-9-war': String,
    '10-3-10-saints': String,
    '10-3-11-wear': String,
    '10-3-12-time': String,
    '10-3-13-times': String,
    '10-3-14-dividing': String,
    '10-3-15-times': String,
    '10-3-16-laws': String,
    '10-3-17-world': String,
    '10-3-18-all': String,
},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('theAntichristRevealedSchema', theAntichristRevealedSchema);