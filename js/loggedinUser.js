// const fetch = require('node-fetch');

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

  import fetch from 'node-fetch';

  // Get Access Token and Site Name
  const ACCESS_TOKEN = ""
  const siteName = ""
  
  // Function to get your site by name
  const getSiteByName = async (siteName) => {
  
      const sitesUrl = `https://api.webflow.com/sites/${siteName}/users`
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
    //   const site = await sites.find(site => site.name === siteName)
      return sites
  
  }
  
  // Run the function and return the Site ID
  (async () => {
      const site = await getSiteByName(siteName)
    //   const siteId = site._id
      console.log(site)
  
  })()