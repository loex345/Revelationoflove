const User = require('../../models/users');
const Portfolio = require('../../models/portfolio')

module.exports = {
    signUp,
    login,
    getUser
}

async function signUp(req, res) {
    try {
        const user = await User.create(req.body.data);
        user.webflow_user_id = req.body._id;
        const portfolio = await new Portfolio();
        portfolio.user = user.webflow_user_id;
        user.save()
        portfolio.save()
        res.json(user)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    console.log(req.body)
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
        console.log(user, "user")
        res.json(user)
    } catch (err) {
        res.status(400).json()
    }
}

/**
 * 
 * user = User.find({email: req.params.email})
 * 
 * 
 */



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
