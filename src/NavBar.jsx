import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='top-nav'>
      <div className='nav-text-large'>My App</div>
      <ul className='nav-list'>
        <Link to='/posts'>Posts</Link>
        <Link to='/users'>Users</Link>
        <Link to='/todos'>Todos</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
