import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div style={{ color: "white"}}>welcome, {user.name}</div>
      &nbsp; | &nbsp;
      <Link to='/mood'>moods</Link>
      &nbsp; | &nbsp;
      <Link to='/genre'>genres</Link>
      &nbsp; | &nbsp;
      <Link to='/favorites'>favorites</Link>
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>log out</Link>
    </nav>
  );
}