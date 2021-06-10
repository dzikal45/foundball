const express = require('express');
const router = express.Router();
const FoundBallController = require('../controllers/FoundBallController');

router.get('/FoundBall', FoundBallController.getPemain);
router.get('/FoundBall/:id', FoundBallController.getPemain);
router.get('/recommendation', FoundBallController.getSuggestion);
router.get('/search', FoundBallController.getSearch);
module.exports = router;