import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
    const [user, setUser] = useState();

    return (
      <div>
          <SignUpForm setUser={setUser} /> 
      </div> 
    );
}