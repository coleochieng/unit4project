import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as videoAPI from '../../utilities/videos-api';

export default function SearchPage({  }) {

    const [searchTerm, setSearchTerm] = useState("");
    // useEffect(()=>{
        async function searchYoutube(evt){
            evt.preventDefault();
            const results = await videoAPI.search(searchTerm)
        }
    // })
    console.log(searchTerm);
  return (
    <form onSubmit={searchYoutube}>
        <input type='text' value={searchTerm} onChange={(evt)=>setSearchTerm(evt.target.value)}/>
        <button type='submit' value='search'/>
    </form>
  );
}