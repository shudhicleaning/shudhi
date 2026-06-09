import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <div className="footer-brand"><em>Shudhi</em></div>
            <p className="footer-about">
              Septic tank cleaning, pumping, and maintenance services across Kerala.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/#services">Tank Cleaning</Link>
            <Link to="/#services">Tank Pumping</Link>
            <Link to="/#services">Drainage Clearing</Link>
            <Link to="/#services">Emergency Service</Link>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/#home">Home</Link>
            <Link to="/#process">How It Works</Link>
            <Link to="/#areas">Service Areas</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+919292241065">9292241065</a>
            <a href="mailto:shudhiseptictankcleaning@gmail.com">shudhiseptictankcleaning@gmail.com</a>
          </div>
        </div>

        <div className="footer-bar">
          &copy; {year} Shudhi Septic Tank Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
