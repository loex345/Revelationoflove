const fetch = require('node-fetch');

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

})();



// const destinationURL = `${ngrok}/api/users/`
// triggerType: 'memberships_user_account_added',

// (async () => {
    
//         const ngrok = "https://7ff1-2601-203-4202-70e0-9d69-f6db-4eeb-217d.ngrok.io"
//         const siteId = process.env.SITE_ID;
//     const destinationURL = `${ngrok}/api/users`
    
//         // API request payload
//         const payload = {
//                 triggerType: 'memberships_user_account_added',
//                 url: destinationURL
//     }
//     const newWebhook = await createWebhook(siteId, payload)
//     console.log(newWebhook)
// })();


// const destinationURL = `${ngrok}/api/users/`
// triggerType: 'memberships_user_account_added',

// (async () => {
    
//         const ngrok = "https://7ff1-2601-203-4202-70e0-9d69-f6db-4eeb-217d.ngrok.io"
//         const siteId = process.env.SITE_ID;
//     const destinationURL = `${ngrok}/api/lessons/`
    
//         // API request payload
//         const payload = {
//                 triggerType: 'form_submission',
//                 url: destinationURL
//     }
//     const newWebhook = await createWebhook(siteId, payload)
//     console.log(newWebhook)
// })();


