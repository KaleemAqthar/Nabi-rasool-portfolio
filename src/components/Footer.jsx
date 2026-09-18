import { Link } from "react-router-dom";
import profile from "../data/profile";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <div className="footer-logo">N</div>
          <h3>{profile.displayName}</h3>
          <p>
            Public service, community engagement and professional contracting experience rooted in Dharmavaram.
          </p>

          <div className="social-links">
            {profile.social?.facebook && (
              <a href={profile.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            )}
            {profile.social?.instagram && (
              <a href={profile.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            )}
            {profile.social?.youtube && (
              <a href={profile.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            )}
          </div>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/public-service">Public Service</Link>
          <Link to="/political-journey">Journey</Link>
        </div>

        <div className="footer-column">
          <h4>MORE</h4>
          <Link to="/projects">Projects</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/media">Media</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h4>LOCATION</h4>
          <p>
            Dharmavaram<br />
            Sri Sathya Sai District<br />
            Andhra Pradesh
          </p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>
          © {new Date().getFullYear()} {profile.displayName}. All rights reserved.
        </span>
        <span>
          PUBLIC SERVICE • DHARMAVARAM
        </span>
      </div>
    </footer>
  );
}

export default Footer;