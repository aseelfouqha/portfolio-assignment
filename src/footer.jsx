function Footer(){
    return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
          
          <div className="footer-section">
            <h3>AROUND THE WEB</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, MIT licensed Bootstrap theme created by
              <a href="#" className="footer-link"> Start Bootstrap</a>.
            </p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>Copyright &copy; Your Website 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;