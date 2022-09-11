import "../FavoritesPage/FavoritesPage.css";
import "../NewSongForm/NewSongForm";
import NewSongForm from "../NewSongForm/NewSongForm";
import {Link} from "react-router-dom";

export default function FavoritesPage({  }) {
    
    return (
        <div className="favorites">
          <h1>favorites</h1>
          <a href="/newsongform"><button>add song</button></a>
          
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