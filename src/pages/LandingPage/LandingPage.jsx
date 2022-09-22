import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';import LoginForm from '../../components/LoginForm/LoginForm';
import { set } from 'mongoose';

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState();

  const [showSignUp, setShowSignUp] = useState(false);

  const openForm = trigger=>{
    if(trigger==='login'){
      setShowLogin(true);
    }else{
      setShowSignUp(true);
    }
  }

  return (
    <main>
      <h1 stlye={{color: 'white'}}>mood muse</h1>
      <button onClick={openForm('signup')}>sign up</button><br/>
      <button onClick={openForm('login')}>log in</button>
      
       { showLogin &&
           <LoginForm setUser={setUser} />
       }
       { showSignUp &&
           <SignUpForm setUser={setUser} />
       }
    </main>
  );
}


// import { useState } from 'react';
// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import LoginForm from '../../components/LoginForm/LoginForm';

// export default function LandingPage({ setUser }) {
//   const [showLogin, setShowLogin] = useState(true);
  
//   return (
//     <main>
//       <h1>Mood Muse</h1>
//       <button onClick={() => setShowLogin(!showLogin)}>
//         {showLogin ? 'Sign Up' : 'Log In'}
//       </button>
//       { showLogin ?
//           <LoginForm setUser={setUser} />
//           :
//           <SignUpForm setUser={setUser} />
//       }
//     </main>
//   );
// }