const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controller/api/users')


router.post('/', usersCtrl.signUp)



module.exports = router;