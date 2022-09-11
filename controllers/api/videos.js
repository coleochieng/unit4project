
module.exports = {
    getVideos
 
   };
   const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
   async function getVideos(req,res) {
     console.log('hi');
     const options = {
         method: 'POST',
         headers: {
             'Content-type': 'application/json',
             'Authorization': 'Bearer '
         }
     }
     const youtubeData = await fetch(BASE_URL, options).then(res => res.json());
     console.log(youtubeData);
   };
 
 