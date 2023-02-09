const User = require('../../models/users');

module.exports = {
    signUp,
}

async function signUp(req, res) {
    console.log("sign-up functionality", req.body._id)
    try {
        const user = await User.create(req.body.data);

        user.webflow_user_id = await req.body._id;
        user.validLessons = 1;

        user.save();
        res.json(user)
    } catch (err) {
        res.status(400).json(err);
    }
}



