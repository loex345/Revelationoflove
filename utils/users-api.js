
const fetch = require('node-fetch');
const sendRequest = require('./send-request')

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const siteId = process.env.SITE_ID;

const getSiteUsers = async (siteId) => {

    const sitesUrl = `https://api.webflow.com/sites/${siteId}/users`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };
    const res = await fetch(sitesUrl, options)
    if (res.ok) return res.json()
}

const listWebHooks = async (siteId) => {
    const siteEndpoint = `https://api.webflow.com/sites/${siteId}/webhooks/`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${ACCESS_TOKEN}`
        },
    };
    const res = await fetch(siteEndpoint, options)
    if (res.ok) {
        return res.json();
    }
}

const createWebhook = async (siteId, payload) => {
    const createWebhookUrl = `https://api.webflow.com/sites/${siteId}/webhooks`
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'authorization': `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify(payload)
    };
    const newWebhook = await fetch(createWebhookUrl, options)
    return newWebhook.json()
}

// Run the function and return the Site ID
(async () => {
    const users = await getSiteUsers(siteId)
    const hook = await listWebHooks(siteId)
    // users.users.forEach(user => console.log(user.data))
})();




// (async () => {

//     const ngrok = "https://40ff-2601-203-4202-70e0-7c0f-dfe4-83e2-408f.ngrok.io"
//     const destinationURL = `${ngrok}/api/users`
//     const siteId = process.env.SITE_ID;

//     // API request payload
//     const payload = {
//         triggerType: 'memberships_user_account_added',
//         url: destinationURL
//     }
//     const newWebhook = await createWebhook(siteId, payload)
//     console.log(newWebhook)
// })()