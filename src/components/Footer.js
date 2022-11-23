const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-arrangement">
        <div className="container-of-text-in-footer">
          <h5 className="text-in-footer">
            Nazwa firmy - wszelkie prawa zastrzeżone, 2019
          </h5>
        </div>
        <div className="container-of-icons">
          <a className="link" href="https://instagram.com">
            <span className="fa-brands fa-instagram socialmedia-icon"></span>
          </a>
          <a className="link" href="https://facebook.com">
            <span className="fa-brands fa-facebook-square socialmedia-icon"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
