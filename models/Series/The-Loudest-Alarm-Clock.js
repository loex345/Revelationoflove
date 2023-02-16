const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theLoudestAlarmClockSchema = new Schema({

    '12-1-1-die': String,
    '12-1-2-not': String,
    '12-1-3-ground': String,
    '12-1-4-dust': String,
    '12-1-5-return': String,
    '12-2-1-dust': String,
    '12-2-2-ground': String,
    '12-2-3-breath': String,
    '12-2-4-soul': String,
    '12-3-1-souls': String,
    '12-3-3-souls': String,
    '12-3-3-soul': String,
    '12-3-4-die': String,
    '12-4-1-immortal': String,
    '12-4-2-immortality': String,
    '12-4-3-earth': String,
    '12-5-1-breath': String,
    '12-5-2-spirit': String,
    '12-5-3-breath': String,
    '12-5-4-perish': String,
    '12-5-5-dead': String,
    '12-6-1-not': String,
    '12-6-1-dead': String,
    '12-6-3-not': String,
    '12-6-4-silence': String,
    '12-6-6-wait': String,
    '12-6-6-call': String,
    '12-7-1-deceiveth': String,
    '12-7-2-not': String,
    '12-7-3-grave': String,
    '12-7-4-no': String,
    '12-7-5-house': String,
    '12-7-6-tomb': String,
    '12-7-7-not': String,
    '12-7-7-not-2': String,
    '12-7-9-devils': String,
    '12-7-10-miracles': String,
    '12-7-11-signs': String,
    '12-7-12-wonders': String,
    '12-7-13-deceive': String,
    '12-7-14-spirits': String,
    '12-7-15-devils': String,
    '12-7-16-coming': String,
    '12-7-17-hear': String,
    '12-7-18-forth': String,
    '12-9-1-today': String,
    '12-9-2-not': String,
    '12-9-3-ascended': String,
    '12-10-1-destroy': String,
    '12-10-2-devil': String,
    '12-10-3-them': String,
    '12-11-1-saints': String,
    '12-11-2-hope': String,
    '12-11-2-hope-2': String,
    '12-11-3-evil': String,
    '12-11-4-come': String,
    isComplete: { type: Boolean, default: false }

},
    {
        timestamps: true,
    }
);

module.exports.theLoudestAlarmClockSchema = theLoudestAlarmClockSchema

module.exports.theLoudestAlarmClockModel = mongoose.model('theLoudestAlarmClock', theLoudestAlarmClockSchema);