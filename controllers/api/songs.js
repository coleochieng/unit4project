const Song = require('../../models/song');

module.exports = {
   addSong

  };

  async function addSong(req, res){
    const song = await Song.create(req.body)
    //song.user = req.user._id 
    song.save()
    res.json(song)
  }


  