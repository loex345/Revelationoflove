const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { whatIsTruthSchema } = require(".././models/Series/What-is-Truth.js");
const { AnAncientDreamSchema } = require("./Series/An-Ancient-Dream");
const { revelationsGPsSchema } = require("./Series/Revelations-GPS");
const { revelationsLostArkSchema } = require("./Series/Revelations-Lost-Ark");
const { israelinBibleProphecySchema } = require("./Series/Israel-in-bible-Prophecy");
const { theSecretOfTheSecretRaptureSchema } = require("./Series/The-Secret-of-the-Secret-Rapture");
const { revelationEternalSignofLoveSchema } = require("./Series/Revelations-Eternal-Sign-of-Love");
const { revelationsForgottenDaySchema } = require("./Series/Revelations-Forgotten-Day");
const { TheTerrorBehindTerrorismSchema } = require("./Series/The-Terror-Behind-Terrorism");
const { theAntichristRevealedSchema } = require("./Series/The-Antichrist-Revealed");
const { howtoPostponeYourFuneralSchema } = require("./Series/How-to-Postpone-Your-Funeral");
const { theLoudestAlarmClockSchema } = require("./Series/The-Loudest-Alarm-Clock");
const { eternalBlissorEternalWoeSchema } = require("./Series/Eternal-Bliss-or-Eternal-Woe");
const { aNewYouSchema } = require("./Series/A-New-You");
const { revelationsSaintsSchema } = require("./Series/Revelations-Saints");
const { revelationsMissUniverseSchema } = require("./Series/Revelations-Miss-Universe");
const { theMarkOfTheBeastSchema } = require("./Series/The-Mark-of-the-Beast");
const { RevelationsSpiritofProphecySchema } = require("./Series/Revelations-Spirit-of-Prophecy");
const { theUSAinBibleSchema } = require("./Series/The-USA-In-Bible-Prophecy");
const { theChurchesGreatestNeedSchema } = require("./Series/The-Churches-Greatest-Need");
const { homeSweetHomeSchema } = require("./Series/Home-Sweet-Home");

const portfolioSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    what_is_truth_free: [whatIsTruthSchema],
    an_ancient_dream: [AnAncientDreamSchema],
    revelations_gps: [revelationsGPsSchema],
    revelations_lost_ark: [revelationsLostArkSchema],
    israel_in_bible_prophecy: [israelinBibleProphecySchema],
    the_secret_about_the_secret_rapture: [theSecretOfTheSecretRaptureSchema],
    revelations_eternal_sign_of_love: [revelationEternalSignofLoveSchema],
    revelations_forgotten_day: [revelationsForgottenDaySchema],
    the_terror_behind_terrorism: [TheTerrorBehindTerrorismSchema],
    the_antichrist_revealed: [theAntichristRevealedSchema],
    how_to_postpone_your_funeral: [howtoPostponeYourFuneralSchema],
    the_loudest_alarm_clock: [theLoudestAlarmClockSchema],
    eternal_bliss_or_eternal_woe: [eternalBlissorEternalWoeSchema],
    a_new_you: [aNewYouSchema],
    revelations_saints: [revelationsSaintsSchema],
    revelations_miss_universe: [revelationsMissUniverseSchema],
    the_mark_of_the_beast: [theMarkOfTheBeastSchema],
    revelations_spirit_of_prophecy: [RevelationsSpiritofProphecySchema],
    usa_in_bible_prophecy: [theUSAinBibleSchema],
    the_churchs_greatest_need: [theChurchesGreatestNeedSchema],
    home_sweet_home: [homeSweetHomeSchema]

},

    {
        timestamps: true,
    }

);


module.exports = mongoose.model('Portfolio', portfolioSchema);