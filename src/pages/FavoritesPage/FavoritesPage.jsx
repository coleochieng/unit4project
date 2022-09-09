import "../FavoritesPage/FavoritesPage.css";

export default function FavoritesPage({  }) {
    
    return (
        <div className="favorites">
          <h1>favorites</h1>
          <button>add song</button>
          
        </div>
      );
  }

// export default function FavoritesPage({  }) {
//     const [showLogin, setShowLogin] = useState(true);
    
//     return (
//       <main>
//         <h1>Mood Muse</h1>
//         <button onClick={() => setShowLogin(!showLogin)}>
//           {showLogin ? 'Sign Up' : 'Log In'}
//         </button>
//         { showLogin ?
//             <LoginForm setUser={setUser} />
//             :
//             <SignUpForm setUser={setUser} />
//         }
//       </main>
//     );
//   }