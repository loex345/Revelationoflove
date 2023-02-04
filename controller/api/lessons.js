const User = require('../../models/users');
const Portfolio = require('../../models/portfolio')

module.exports = {
    getSeries,
    saveAnswers
}


async function getSeries(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email });
        console.log(user.portfolio)
        const portfolio = await Portfolio.findOne({ user: user._id }).populate('what_is_truth', 'lesson').exec();
        //console portfolio after steps
        // const series = portfolio
        console.log(portfolio)
        res.json(series.lesson)
    
    } catch (err) {
        res.status(400).json(err)
    }
}

async function saveAnswers(req, res) {
    console.log("Save answers", req.body, "email", req.params.email)
    try {
        const user = await User.findOne({ email: req.params.email });
        const portfolio = await Portfolio.updateOne(
            { user: user._id },
            {
                $set:
                {
                    "what-is-truth.lesson": req.body,
                }
            }
        );

        const series = portfolio['what-is-truth']
        console.log("updated lesson", series.lesson)

        res.json(portfolio)
    } catch (err) {
        res.status(400).json(err)
    }
}
