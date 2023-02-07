const User = require('../../models/users');

module.exports = {
    signUp,
    login,
    getUser
}

async function signUp(req, res) {
    console.log("Sign-up", req.body._id)
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

async function login(req, res) {
    console.log("login", req.body)
    try {
        const user = await User.findOne({ email: req.body.data.email });
        if (!user) throw new Error('Invalid Credentials');
        res.json(user)
    } catch (e) {
        res.status(400).json(e);
    }
}

async function getUser(req, res) {
    try {
        const user = await User.findOne({ email: req.params.email })
        res.json(user)
    } catch (err) {
        res.status(400).json()
    }
}


/*------------Helper Function--------*/

const updateUser = async (user) => {
    const siteId = process.env.SITE_ID;
    const user_id_test = user_id_test
    console.log(user.webflow_user_id)
    const userURL = `https://api.webflow.com/sites/${siteId}/users/${user.webflow_user_id}`
    const options = {
        method: 'PATCH',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'authorization': `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify({ user_id_test })
    };
    const updatedUser = await fetch(userURL, options)
    console.log(updateUser)
    return updatedUser.json()
}

function convert(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '-') result += '_';
        else result += word[i];
    }
    return result;
 }