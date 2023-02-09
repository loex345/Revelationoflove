const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theUSAinBibleSchema = new Schema({

'19-3-1-sea': String,
'19-3-2-heads': String,
'19-3-3-horns': String,
'19-3-4-blasphemy': String,
'19-3-5-leopard': String,
'19-3-6-bear': String,
'19-3-7-lion': String,
'19-4-1-dragon': String,
'19-5-1-earth': String,
'19-5-2-horns': String,
'19-5-3-lamb': String,
'19-5-4-dragon': String,
'19-5-5-power': String,
'19-5-6-worship': String,
'19-8-1-power': String,
'19-8-2-cause': String,
'19-8-3-killed': String,
'19-8-4-mark': String,
'19-1-1-loved': String,
'19-1-2-washed': String,
'19-1-3-blood': String,

},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('theUSAinBible', theUSAinBibleSchema);