import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
               <img src="/images/logo.png" className="logo"/>
              <h3>K S H I R A M</h3>
              <p className="footer-tagline">
                Your trusted partner in healthcare. Bringing quality medical 
                services to your doorstep with compassion and innovation.
              </p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f">fb</i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter">tw</i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram">ig</i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in">in</i>
              </a>
            </div>
          </div>

      
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/find-doctors">Find Doctors</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/appointments">My Appointments</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
            </ul>
          </div>

        
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><a href="#">Video Consultation</a></li>
              <li><a href="#">Chat Consultation</a></li>
              <li><a href="#">In-Clinic Visits</a></li>
              <li><a href="#">Online Medicine</a></li>
              <li><a href="#">Health Records</a></li>
            </ul>
          </div>

        
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>support@kshiram.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 1800-123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Healthcare Street, Medical District, Anantapur,Andhra Pradesh, India - 515001</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 KSHIRAM. All rights reserved.</p>
            </div>
            <div className="developer-credit">
              <p>
                Designed and Developed by{' '}
                <span className="developer-name">Naresh Magatham</span>
              </p>
            </div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;