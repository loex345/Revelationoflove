const User = require('../../models/users');

module.exports = {
    signUp,
}

async function signUp(req, res) {
    console.log("sign-up functionality", req.body._id)
    try {
        const user = await User.create(req.body.data);
        const portfolio = new Portfolio();

        user.webflow_user_id = await req.body._id;
        user.validLessons = 1;

        user.portfolio = portfolio._id;
        portfolio.user = user._id;


        await portfolio.save();
        user.save();
        res.json(user)
    } catch (err) {
        res.status(400).json(err);
    }
}



