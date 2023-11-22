function Header() {
  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <img
              src="logo.png"
              alt="Logo"
              width="50"
              height="55"
              className="d-inline-block me-3"
            />
            AniList
          </a>
          <button type="button" className="btn btn-primary me-2">
            Minha Lista
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
