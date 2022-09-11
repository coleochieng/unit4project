import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
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


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/genre' element={<GenrePage />} />
            <Route path='/mood' element={<MoodPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/newsongform' element={<NewSongForm />} />
            <Route path='/rock' element={<RockPage />} />
            <Route path='/pop' element={<PopPage />} />
            <Route path='/hip-hop' element={<HipHopPage />} />
            <Route path='/rnb' element={<RnbPage />} />
            <Route path='/country' element={<CountryPage />} />
            <Route path='/charged' element={<ChargedPage />} />
            <Route path='/romantic' element={<RomanticPage />} />
            <Route path='/playful' element={<PlayfulPage />} />
            <Route path='/calm' element={<CalmPage />} />
            <Route path='/high' element={<HighPage />} />
            <Route path='/pensive' element={<PensivePage />} />
            <Route path='/sleepy' element={<SleepyPage />} />
            <Route path='/hostile' element={<HostilePage />} />
            <Route path='/melancholic' element={<MelancholicPage />} />
            <Route path='/positive' element={<PositivePage />} />
          </Routes>
        </>
        :
        <LandingPage setUser={setUser} />
      }
    </main>
  );
}
