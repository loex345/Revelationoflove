const User = require('../../models/users');

module.exports = {
    getSeries,
    saveAnswers,
    submitForm,
    getLessonCount
}


async function getSeries(req, res) {
    const lesson = convert(req.params.series)
    console.log(lesson)
    try {
        const user = await User.findOne({ email: req.params.email });
        const series = user[lesson];
        console.log(series, "series")

        if (!series.length) return;
        res.json(series[0])

    } catch (err) {
        res.status(400).json(err)
    }
}

async function saveAnswers(req, res) {
    console.log("Save answers", req.body, "email", req.params.email)
    const lesson = convert(req.params.series)
    try {
        const user = await User.findOne({ email: req.params.email });
        const series = user[lesson];

        if (req.body) {
            if (series.length >= 1) user[lesson].pop();

            user[lesson].push(req.body)

            user.save();
        }
        res.json(series[0])
    } catch (err) {
        res.status(400).json(err)
    }
}

async function submitForm(req, res) {
    const lesson = convert(req.body.data.lesson)
    console.log(req.body.data, "this lesson")
    try {
        const user = await User.findOne({ email: req.body.data.Email });
        const series = user[lesson];
        console.log(series)
        if (!series.isComplete) {
            user.validLessons += 1;
            series.isComplete = true;
            user.save();
        }
        res.json(user.validLessons);
    } catch (err) {
        res.status(400).json(err)
    }
}


async function getLessonCount(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email });
        console.log(user.validLessons, "valid lesson increment")
        res.json(user.validLessons);
    } catch (err) {
        res.status(400).json(err)
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