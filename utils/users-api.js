const fetch = require('node-fetch');
const sendRequest = require('./send-request')

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const siteId = process.env.SITE_ID;

// Function to get your site by name
const getSiteByName = async (siteId) => {

    const sitesUrl = `https://api.webflow.com/sites/${siteId}/webhooks`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };

    const sites = await fetch(sitesUrl, options)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));
    return sites
}

// Run the function and return the Site ID
(async () => {
    const site = await getSiteByName(siteId)
console.log(site)
    // site.users.forEach((user) => console.log(user.data))

})();



// const url = 'https://api.webflow.com/sites/639751350108e54a68d9a1ae/users';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     authorization: 'Bearer '
//   }
// };


// fetch(url, options)
//   .then(res => res.json())
//   .then(json => json)
//   .then((data) => {
//       console.log("I am here",data.users)
//       // data.forEach((user) => {
//       //   console.log(user)
//       // });
//   })
//   .catch(err => console.error('error:' + err));