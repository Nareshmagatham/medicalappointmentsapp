import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Header = ({ user, onLoginClick = () => {}, onSignupClick = () => {}, onLogoutClick = () => {} }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    onLogoutClick();
    setShowDropdown(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <img src="/images/logo.png" className="logo"/>
          <Link to="/"> K S H I R A M</Link>
        </div>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/find-doctors">Find Doctors</Link>
          <Link to="/about">About Us</Link>
        </nav>
        
        <div className="nav-auth">
          {user ? (
            <div className="user-menu">
              <button className="user-icon-btn" onClick={toggleDropdown}>
                <div className="user-avatar">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="user-name">{user.name || user.email}</span>
                <span className="dropdown-arrow">▼</span>
              </button>
              
              {showDropdown && (
                <div className="user-dropdown">
                  <div className="dropdown-item user-info">
                    <strong>{user.name || 'User'}</strong>
                    <span>{user.email}</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <Link to="/profile" className="dropdown-item">
                    My Profile
                  </Link>
                  <Link to="/appointments" className="dropdown-item">
                    My Appointments
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="login-btn" onClick={onLoginClick}>Login</button>
              <button className="signup-btn" onClick={onSignupClick}>Sign-up</button>
            </>
          )}
        </div>
      </div>
      
      {showDropdown && (
        <div className="dropdown-overlay" onClick={() => setShowDropdown(false)}></div>
      )}
    </header>
  );
};

export default Header;