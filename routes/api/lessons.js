const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../../controller/api/lessons')

/**  POST */

router.post('/:email', lessonsCtrl.saveAnswers);

/**  GET */

router.get('/:email/:series', lessonsCtrl.getSeries);

module.exports = router;