const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="container-navigation">
          <h1 className="heading-1">moja firma</h1>
          <ul className="container-links">
            <li>
              <a className="link" href="#about-us">
                o nas
              </a>
            </li>
            <li>
              <a className="link" href="#offer">
                oferta
              </a>
            </li>
            <li>
              <a className="disabled link" disabled href="#contact">
                kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
