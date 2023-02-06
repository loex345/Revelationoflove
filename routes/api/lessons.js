const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../../controller/api/lessons')

/**  POST */

router.post('/:email/:series', lessonsCtrl.saveAnswers);

router.post('/', lessonsCtrl.submitForm)
router.get('/:email', lessonsCtrl.getLessonCount)

/**  GET */

router.get('/:email/:series', lessonsCtrl.getSeries);

module.exports = router;