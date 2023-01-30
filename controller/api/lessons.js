const User = require('../../models/users');
const Portfolio = require('../../models/portfolio')

module.exports = {
    getSeries,
    saveAnswers
}



async function getSeries(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email });
        const portfolio = await Portfolio.findOne({ user: user.webflow_user_id });
        const series = portfolio['what-is-truth']
        console.log(series.lesson)
        res.json(series.lesson)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function saveAnswers(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email });
        const portfolio = await Portfolio.findOneAndUpdate(
            { user: user.webflow_user_id },
            req.body.data,
            { new: true },
        );
        const series = portfolio['what-is-truth']
        console.log(series.lesson)
        res.json(portfolio)
    } catch (err) {
        res.status(400).json(err)
    }
}