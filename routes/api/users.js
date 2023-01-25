const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controller/api/users')

router.get('/', (req, res) => {
    res.send('Success!')
});

/** router.post */
router.post('/webhooks', usersCtrl.signUp)

// router.post('/login', usersCtrl.login) ??

/** router.get */



module.exports = router;