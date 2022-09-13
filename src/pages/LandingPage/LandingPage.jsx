import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LandingPage() {
  
  return (
    <main>
      <h1>mood muse</h1>
      <a href ='/signup'><button>sign up</button></a>
      <a href ='/login'><button>log in</button></a>
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