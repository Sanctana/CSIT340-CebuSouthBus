export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>My React App</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
