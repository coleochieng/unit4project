export default function MoodPage({  }) {
    //const [showLogin, setShowLogin] = useState(true);
    
    return (
      <main>
        <h1>Mood Muse</h1>
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Sign Up' : 'Log In'}
        </button>
        { showLogin ?
            <LoginForm setUser={setUser} />
            :
            <SignUpForm setUser={setUser} />
        }
      </main>
    );
  }