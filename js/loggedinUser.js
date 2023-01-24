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

import Webflow from 'wefblow-api'
import dotenv from 'dotenv' // use to get values from .env file


// Get Access Token and Site Object
const TOKEN = process.env.TOKEN
const webflow = new Webflow({ token: TOKEN })
const [site] = await webflow.sites();

console.log(site)