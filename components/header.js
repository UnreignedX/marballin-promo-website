export default function Header() {
  return (
    <header className="nav-container">
      <nav className="nav-bar">
        <div className="brand-logo">
          <img src="/assets/marballin_b.png" alt="Logo" />
          <span>MARBALLIN</span>
        </div>
        <div className="nav-contents">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </header>
  );
}
