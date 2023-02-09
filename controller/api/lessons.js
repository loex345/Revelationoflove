const User = require('../../models/users');

module.exports = {
    getSeries,
    saveAnswers,
    submitForm,
    getLessonCount
}


async function getSeries(req, res) {
    const lesson = convert(req.params.series)
    try {
        const user = await User.findOne({ email: req.params.email });
        const series = user[lesson];

        if (!series.length) return;
        console.log(series[0].isComplete, "iscomplete")
        res.json(series[0])

    } catch (err) {
        res.status(400).json(err)
    }
}

async function saveAnswers(req, res) {
    console.log("save answers functionality", req.body);
    const lesson = convert(req.params.series);
    let isComplete = false;
    try {
        const user = await User.findOne({ email: req.params.email });
        const series = user[lesson];
        if (series[0].isComplete) isComplete = true;

        if (req.body) {
            if (series.length >= 1) user[lesson].pop();

            user[lesson].push(req.body);
            
            if (isComplete) user[lesson][0].isComplete = true;

            user.save();
        }
        res.json(series[0]);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function submitForm(req, res) {

    const lesson = convert(req.body.data.lesson);

    console.log("from submitted - backend", lesson);

    try {
        const user = await User.findOne({ email: req.body.data.Email });
       
        if (user[lesson][0].isComplete === false) {
            user.validLessons += 1;
            user[lesson][0].isComplete = true;
        }

        await user.save();

        res.json(user.validLessons);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getLessonCount(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email });
        console.log(user.validLessons, "valid lesson increment");
        res.json(user.validLessons);
    } catch (err) {
        res.status(400).json(err);
    }
}

function convert(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '-') result += '_';
        else result += word[i];
    }
    return result;
}