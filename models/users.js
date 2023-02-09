const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whatIsTruthSchema = new Schema({

    '1-1-5-A': String,
    '1-1-6-King': String,
    '1-2-1-this': String,
    '1-2-1-1-end': String,
    '1-2-2-witness': String,
    '1-2-3-truth': String,
    "1-3-2-Herod's": String,
    '1-3-3-miracle': String,
    '1-3-3-miracle-2': String,
    '1-3-4-sent': String,
    '1-3-5-Pilate': String,
    '1-4-1-word': String,
    '1-4-2-truth': String,
    '1-5-1-fear': String,
    '1-5-2-Peace': String,
    '1-5-3-you': String,
    '1-5-4-terrified': String,
    '1-5-5-affrighted': String,
    '1-5-6-spirit': String,
    '1-6-1-handle': String,
    '1-6-3-Word': String,
    '1-5-4-of': String,
    '1-6-5-Life': String,
    '1-6-1-see': String,
    '1-7-1-revealer': String,
    '1-7-2-revealeth': String,
    '1-7-3-revealeth': String,
    '1-7-4-manifest': String,
    '1-7-5-God': String,
    '1-7-6-sure': String,
    '1-7-7-light': String,
    '1-7-8-dawn': String,
    '1-7-9-arise': String,
    'Christ': String,
    'tribute': String,
    'forbidding': String,
    'perverting': String,
    isComplete: { type: Boolean, default: false }

},
    {
        timestamps: true,
    }
);

const AnAncientDreamSchema = new Schema({

    '2-1-2-beginning': String,
    '2-1-3-convinced': String,
    '2-1-4-God': String,
    '2-2-3-in': String,
    '2-1-6-you': String,
    '2-1-7-sure': String,
    '2-1-8-light': String,
    '2-2': String,
    '2-1-11-third': String,
    '2-1-12-Judah': String,
    '2-1-13-Babylon': String,
    '2-1-14-Daniel': String,
    '2-1-15-purposed': String,
    '2-1-16-heart': String,
    '2-1-17-meat': String,
    '2-1-18-wine': String,
    '2-1-19-wisdom': String,
    '2-2-20-ten': String,
    '2-1-10-hearts-2': String,
    '2-2-1-magicians': String,
    '2-2-2-astrologers': String,
    '2-2-3-sorcerers': String,
    '2-2-4-tell': String,
    '2-2-5-man': String,
    '2-2-6-none': String,
    '2-2-7-not': String,
    '2-2-8-desire': String,
    '2-2-9-mercies': String,
    '2-2-10-thank': String,
    '2-2-11-praise': String,
    '2-2-13-God': String,
    '2-2-13-heaven': String,
    '2-2-14-image': String,
    '2-2-15-gold': String,
    '2-2-16-silver': String,
    '2-2-17-brass': String,
    '2-2-18-iron': String,
    '2-2-19-clay': String,
    '2-2-20-stone': String,
    '2-2-21-mountain': String,
    '2-3-1-Thou': String,
    '2-3-2-art': String,
    '2-3-3-kingdom': String,
    '2-2-4-Medes': String,
    '2-2-5-Persians': String,
    '2-3-6-Grecia': String,
    '2-3-7-strong': String,
    '2-3-9-world': String,
    '2-3-8-Ceasar': String,
    '2-3-10-taxed': String,
    '2-3-11-divided': String,
    '2-3-12-mingle': String,
    '2-3-13-not': String,
    '2-3-14-God': String,
    '2-3-15-heaven': String,
    '2-3-16-kingdom': String,
    '2-3-17-consume': String,
    '2-3-18-for': String,
    '2-3-19-ever': String,
    '2-3-20-become': String,
    '2-3-21-Lord': String,
    '2-3-22-reign': String,
    '2-3-22-reign-3': String,
    '2-3-23-ever': String,
    '2-3-24-God': String,
    '2-3-25-gods': String,
    '2-3-26-Lord': String,
    '2-3-27-kings': String,
    '2-4-1-will': String,
    '2-4-2-done': String,
    '2-4-3-seek': String,
    '2-4-4-kingdom': String,
    '2-4-5-righteousness': String,
    '2-4-6-you': String,
    '2-4-7-Christ': String,
    '2-4-8-heaven': String,
    '2-4-9-saints': String,
    '2-4-10-household': String,
    '2-1-1-end': String,
    isComplete: { type: Boolean, default: false }

},
    {
        timestamps: true,
    }
);

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    webflow_user_id: {
        type: String,
        unique: true,
    },
    what_is_truth_free: [whatIsTruthSchema],
    an_ancient_dream: [AnAncientDreamSchema],
    validLessons: Number


},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('User', userSchema);

