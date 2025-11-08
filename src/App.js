import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import FindDoctors from './pages/FindDoctors';
import DoctorDetail from './pages/DoctorDetail';
import AboutUs from './pages/AboutUs';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import './styles/App.css';

function App() {
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    mode: 'login'
  });
  const [user, setUser] = useState(null);

  const openLogin = () => {
    setAuthModal({ isOpen: true, mode: 'login' });
  };

  const openSignup = () => {
    setAuthModal({ isOpen: true, mode: 'signup' });
  };

  const closeModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const switchMode = (mode) => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleLogin = (userData) => {
    setUser(userData);
    closeModal();
  };

  const handleSignup = (userData) => {
    setUser(userData);
    closeModal();
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Header 
        user={user}
        onLoginClick={openLogin}
        onSignupClick={openSignup}
        onLogoutClick={handleLogout}
      />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/appointments" element={<MyAppointments />} />
        </Routes>
      </main>

      <Footer />

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeModal}
        mode={authModal.mode}
        onSwitchMode={switchMode}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </div>
  );
}

export default App;