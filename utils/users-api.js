
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

const createFormHook = async (siteId) => {

    const url = `https://api.webflow.com/sites/${siteId}/webhooks`
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'authorization': `Bearer ${ACCESS_TOKEN}`
        },
        body: JSON.stringify({ triggerType: 'form_submission' })
    };
    const form = await fetch(url, options)
    console.log(form, "form hook");
    return form.json();
}

// Run the function and return the Site ID
(async () => {
    const users = await getSiteUsers(siteId)
    const hook = await listWebHooks(siteId)

})();




// (async () => {

//     const ngrok = "https://8353-2600-6c50-7f-6382-ed49-81ef-7525-884.ngrok.io"
//     const siteId = process.env.SITE_ID;
// const destinationURL = `${ngrok}/api/users/`

//     // API request payload
//     const payload = {
//         triggerType: 'memberships_user_account_added',
//         url: destinationURL
//     }
//     const newWebhook = await createWebhook(siteId, payload)
//     console.log(newWebhook)
// })()


