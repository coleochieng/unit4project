// routes/api/users.js

const express = require('express');
const router = express.Router();
const songsCtrl = require('../../controllers/api/songs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/songs
router.post('/new', songsCtrl.addSong)
router.get('/', songsCtrl.getSongs)
router.delete('/:id', songsCtrl.deleteSong)

module.exports = router;
