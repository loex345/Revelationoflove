
const fetch = require('node-fetch');
const sendRequest = require('./send-request')

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const siteId = process.env.SITE_ID;

const getSiteByName = async (siteId) => {

    const sitesUrl = `https://api.webflow.com/sites/${siteId}`
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
    const webHookId = '63d1a7b6858ca0b7c0b32a40'
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
        // console.log(res, 'true')
        return res.json();
    }



}

// Run the function and return the Site ID
(async () => {
    try {
        const hook = await listWebHooks(siteId)
        // const newMember = await newMemberHook(siteId)
        // users.users.forEach(user => console.log(user)) 
        // console.log(hook, "hooks",)
    } catch (err) {
        console.log(err)
    }
})();


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

// (async () => {

//     const ngrok = "https://cee8-2600-6c50-7f-6382-4917-1c3c-6ba0-906a.ngrok.io"
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