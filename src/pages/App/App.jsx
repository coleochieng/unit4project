import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as songAPI from "../../utilities/songs-api";
//import AuthPage from '../LandingPage/AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import GenrePage from '../GenrePage/GenrePage';
import MoodPage from '../MoodPage/MoodPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import SearchPage from '../SearchPage/SearchPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import NewSongForm from '../NewSongForm/NewSongForm';
import RockPage from '../Genres/RockPage/RockPage';
import PopPage from '../Genres/PopPage/PopPage';
import HipHopPage from '../Genres/HipHopPage/HipHopPage';
import RnbPage from '../Genres/RnbPage/RnbPage';
import CountryPage from '../Genres/CountryPage/CountryPage';
import ChargedPage from "../Moods/ChargedPage/ChargedPage";
import RomanticPage from "../Moods/RomanticPage/RomanticPage";
import PlayfulPage from "../Moods/PlayfulPage/PlayfulPage";
import CalmPage from "../Moods/CalmPage/CalmPage";
import HighPage from "../Moods/HighPage/HighPage";
import PensivePage from "../Moods/PensivePage/PensivePage";
import SleepyPage from "../Moods/SleepyPage/SleepyPage";
import HostilePage from "../Moods/HostilePage/HostilePage";
import MelancholicPage from "../Moods/MelancholicPage/MelancholicPage";
import PositivePage from "../Moods/PositivePage/PositivePage";
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [songs, setSongs] = useState([]);
  useEffect(function(){
    async function getSongs() {
      const song = await songAPI.getAllSongs()
      setSongs(song)
    }
    getSongs();
  },[])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/genre' element={<GenrePage songs={songs} />} />
            <Route path='/mood' element={<MoodPage songs={songs} />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/newsongform' element={<NewSongForm />} />
            <Route path='/rock' element={<RockPage songs={songs} />} />
            <Route path='/pop' element={<PopPage songs={songs} />} />
            <Route path='/hip-hop' element={<HipHopPage songs={songs} />} />
            <Route path='/rnb' element={<RnbPage songs={songs} />} />
            <Route path='/country' element={<CountryPage songs={songs} />} />
            <Route path='/mood/charged' element={<ChargedPage songs={songs} />} />
            <Route path='/romantic' element={<RomanticPage songs={songs} />} />
            <Route path='/playful' element={<PlayfulPage songs={songs} />} />
            <Route path='/calm' element={<CalmPage songs={songs} />} />
            <Route path='/high' element={<HighPage songs={songs} />} />
            <Route path='/pensive' element={<PensivePage songs={songs} />} />
            <Route path='/sleepy' element={<SleepyPage songs={songs} />} />
            <Route path='/hostile' element={<HostilePage songs={songs} />} />
            <Route path='/melancholic' element={<MelancholicPage songs={songs} />} />
            <Route path='/positive' element={<PositivePage songs={songs} />} />
          </Routes>
        </>
        :
        <LandingPage setUser={setUser} />
      }
    </main>
  );
}
