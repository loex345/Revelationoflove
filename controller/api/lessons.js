const User = require('../../models/users');

module.exports = {
    getSeries,
    saveAnswers,
    submitForm,
    getLessonCount
}


async function getSeries(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email });
        const series = user.what_is_truth;
        console.log(series[0], "series")

        if (!series) return;
        res.json(series[0])

    } catch (err) {
        res.status(400).json(err)
    }
}

async function saveAnswers(req, res) {
    console.log("Save answers", req.body, "email", req.params.email)
    try {
        const user = await User.findOne({ email: req.params.email });
        const series = user.what_is_truth;

        if (req.body) {
            if (series.length >= 1) user.what_is_truth.pop();

            user.what_is_truth.push(req.body)

            user.save();
        }
        res.json(series[0])
    } catch (err) {
        res.status(400).json(err)
    }
}

async function submitForm(req, res) {
    try {
        const user = await User.findOne({ email: req.body.data.Email });
        user.validLessons += 1;
        user.save();
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
