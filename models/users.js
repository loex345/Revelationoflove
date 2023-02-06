const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whatIsTruthSchema = new Schema({

    "1-1-5-A": String,
    "1-1-6-King": String,
    "1-2-1-this": String,
    "1-2-1-1-end": String,
    "1-2-2-witness": String,
    "1-2-3-truth": String,
    "1-3-2-Herod-s": String,
    "1-3-3-miracle": String,
    "1-3-3-miracle-2": String,
    "1-3-4-sent": String,
    "1-3-5-Pilate": String,
    "1-4-1-word": String,
    "1-4-2-truth": String,
    "1-5-1-fear": String,
    "1-5-2-Peace": String,
    "1-5-3-you": String,
    "1-5-4-terrified": String,
    "1-5-5-affrighted": String,
    "1-5-6-spirit": String,
    "1-6-1-handle": String,
    "1-6-3-Word": String,
    "1-5-4-of": String,
    "1-6-5-Life": String,
    "1-6-1-see": String,
    "1-7-1-revealer": String,
    "1-7-2-revealeth": String,
    "1-7-3-revealeth": String,
    "1-7-4-manifest": String,
    "1-7-5-God": String,
    "1-7-6-sure": String,
    "1-7-7-light": String,
    "1-7-8-dawn": String,
    "1-7-9-arise": String,
    'Christ': String,
    'tribute': String,
    'forbidding': String,
    'perverting': String,

},
    {
        timestamps: true,
    }
);

const portfolioSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' }, 
    what_is_truth: {
        lesson: { type: Schema.Types.ObjectId, ref: 'WhatIsTruth' },
        isComplete: Boolean,
    }

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
    portfolio: [portfolioSchema],
    what_is_truth: [whatIsTruthSchema],
    validLessons: Number

    
},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('User', userSchema);

