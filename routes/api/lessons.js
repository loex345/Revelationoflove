const express = require('express');
const router = express.Router();
const lessonsCtrl = require('../../controller/api/lessons')


router.post('/:email/:series', lessonsCtrl.saveAnswers);
router.get('/:email/:series', lessonsCtrl.getSeries);

router.post('/', lessonsCtrl.submitForm)
router.get('/:email', lessonsCtrl.getLessonCount)



module.exports = router;