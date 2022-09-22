const Song = require('../../models/song');

module.exports = {
  addSong,
  getSongs,
  deleteSong

};

  async function deleteSong(req, res){
    const song = await Song.delete(req.body)
    res.json(songs)
  }

  async function addSong(req, res){
    const song = await Song.create(req.body)
    //song.user = req.user._id 
    song.save()
    res.json(song)
  }

  async function getSongs(req, res){
    const songs = await Song.find({})
    console.log(songs)
    //song.user = req.user._id 
    res.json(songs)
  }






  