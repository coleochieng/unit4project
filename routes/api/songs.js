// routes/api/users.js

const express = require('express');
const router = express.Router();
const videosCtrl = require('../../controllers/api/videos');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', videosCtrl.getVideos)

module.exports = router;
