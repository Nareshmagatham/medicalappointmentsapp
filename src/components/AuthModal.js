import React, { useState, useEffect } from 'react';
import '../styles/components.css';

const AuthModal = ({ isOpen, onClose, mode, onSwitchMode, onLogin, onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (mode === 'signup') {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setMessage('Please fill all fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match');
        return;
      }
      if (formData.password.length < 6) {
        setMessage('Password must be at least 6 characters');
        return;
      }
      
      const userData = {
        name: formData.name,
        email: formData.email
      };
      setMessage(`Account created successfully! Welcome ${formData.name}`);
      setTimeout(() => {
        onSignup(userData);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setMessage('');
      }, 1500);
      
    } else {
      if (!formData.email || !formData.password) {
        setMessage('Please fill all fields');
        return;
      }

      const userName = formData.email.split('@')[0];
      const userData = {
        name: userName.charAt(0).toUpperCase() + userName.slice(1),
        email: formData.email
      };
      setMessage(`Welcome ${userData.name}!`);
      setTimeout(() => {
        onLogin(userData);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setMessage('');
      }, 1500);
    }
  };


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <h2>{mode === 'login' ? 'Login' : 'Create Account'}</h2>
        
        {message && (
          <div className={`message ${message.includes('Welcome') || message.includes('successfully') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="auth-form">
          {mode === 'signup' && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          {mode === 'signup' && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
              />
            </div>
          )}
          
          <button type="submit" className="auth-submit-btn">
            {mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>
        
        <div className="auth-switch">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => onSwitchMode('signup')} className="switch-btn">
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => onSwitchMode('login')} className="switch-btn">
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;