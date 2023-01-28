const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controller/api/users')


router.post('/', usersCtrl.signUp)

router.post('/login', usersCtrl.login)





module.exports = router;