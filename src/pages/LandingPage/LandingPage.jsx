import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LandingPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setshowSignUp] = useState(false);

  const changeForm = (options)=>{
    if(options === 'login'){
      setShowLogin(true);
      setshowSignUp(false);
    }else{
      setShowLogin(false);
      setshowSignUp(true);
    }
  }
  
  return (
    <main>
      <h1>Mood Muse</h1>
      <button onClick={() => changeForm('login')}>
        {'Log In'}
      </button>

      <button onClick={() => changeForm('signin')}>
        {'Sign Up'}
      </button>
      

      { showLogin && <LoginForm setUser={setUser} />}

      { showSignUp && <SignUpForm setUser={setUser} />}

    </main>
  );
}