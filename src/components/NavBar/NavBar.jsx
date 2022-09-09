import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to='/mood'>by mood</Link>
      &nbsp; | &nbsp;
      <Link to='/genre'>by genre</Link>
      &nbsp; | &nbsp;
      <Link to='/favorites'>favorites</Link>
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>log out</Link>
    </nav>
  );
}