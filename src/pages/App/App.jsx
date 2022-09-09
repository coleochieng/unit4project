import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../LandingPage/AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import GenrePage from '../GenrePage/GenrePage';
import MoodPage from '../MoodPage/MoodPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import SearchPage from '../SearchPage/SearchPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<AuthPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/genre' element={<GenrePage />} />
            <Route path='/genre' element={<GenrePage />} />
            <Route path='/genre' element={<GenrePage />} />
            <Route path='/genre' element={<GenrePage />} />
            <Route path='/genre' element={<GenrePage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
