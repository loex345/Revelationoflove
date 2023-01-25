const User = require('../../models/users')


module.exports =  {
    signUp,
    login
}
/**  TODO
 * 
 * SIGN-UP FUNCTIONALITY
 *  -- PULL WEBFLOWS API USER INFORMATION TO STORE THE DATA INTO MONGODB DATABASE
 *  -- NEED TO PASS A TOKEN THROUGH AS WELL AS ENCRYPT THE PASSWORD
 * 
 * 
 * 
 * 
 * LOGIN FUNCTIONALITY 
 *  -- RETRIEVE USER INFORMATION IF THERE IS A MATCHING EMAIL AND ID(MAYBE) IN DATABASE
 */
 let count = 0;

function signUp(req, res) {
    count++
    console.log(req.body)
} 

console.log(count)

function login(req, res) {
    // console.log(req.body)
} 