import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div>
        <span role="img" aria-label="icon"></span>My Phonebook
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}
