import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
    const [user, setUser] = useState();

    return (
      <div>
           <LoginForm setUser={setUser} />
      </div> 
    );
}