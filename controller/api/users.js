const User = require('../../models/users');
// const jwt = require('jsonwebtoken');


module.exports = {
    signUp,
    login
}

async function signUp(req, res) {
    try {
        const user = await User.create(req.body.data);
        res.json(user)
    } catch (err) {
        res.status(400).json(err);
    }
}


async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.data.email });
        if (!user) throw new Error('Invalid Credentials');
        res.json(user)
    } catch (e) {
        res.status(400).json(e);
    }
}