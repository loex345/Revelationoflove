
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


const newMemberHook = async (siteId) => {
    const siteEndpoint = `https://api.webflow.com/sites/${siteId}/webhooks`
    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({triggerType: 'form_submission'})
      };
      const res = await fetch(siteEndpoint, options)
      if (res.ok) return res.json();
}
const listWebHooks = async (siteId) => {
    const siteEndpoint = `https://api.webflow.com/sites/${siteId}/webhooks`
    const options = {
        method: 'GET',
        headers: {accept: 'application/json'},
      };
      const res = await fetch(siteEndpoint, options)
      if (res.ok) return res.json();
}

// Run the function and return the Site ID
(async () => {
    const sites = await getSiteByName(siteId);
    const users = await getSiteUsers(siteId)
    const hook = await listWebHooks(siteId)
    const newMember = await newMemberHook(siteId)
    // users.users.forEach(user => console.log(user)) 
    console.log(hook, "hooks", newMember, "new member")
})();


