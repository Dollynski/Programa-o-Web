function Footer() {
  return (
    <div>
      <footer
        className="navbar bg-dark border-bottom border-body flex space-between"
        data-bs-theme="dark" 
      >
        <h6 className="navbar-brand" href="#">
        © Direitos Reservados AniList
        </h6>
        <img src="logo.png" alt="logo_footer" width={50} height={55}/>
        <h6 className="navbar-brand">
        “Assista com Moderação”
        </h6>
      </footer>
    </div>
  );
}

export default Footer;
