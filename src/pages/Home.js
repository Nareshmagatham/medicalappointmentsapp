import React from 'react';
import { Link } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';
import '../styles/components.css';

const Home = () => {
  return (
    <div className="home-page">

      <section className="hero-section">
        <div className="hero-carousel">
          <div className="carousel-container">
            <div className="carousel-slide active">
              <img src="/images/hero1.png" alt="Healthcare Professional 1" />
              <div className="carousel-overlay"></div>
            </div>
            <div className="carousel-slide">
              <img src="/images/hero2.png" alt="Healthcare Professional 2" />
              <div className="carousel-overlay"></div>
            </div>
            <div className="carousel-slide">
              <img src="/images/hero3.png" alt="Modern Hospital Facility" />
              <div className="carousel-overlay"></div>
            </div>
            <div className="carousel-slide">
              <img src="/images/hero4.png" alt="Patient Care" />
              <div className="carousel-overlay"></div>
            </div>
          </div>
          
          <div className="hero-content">
            <div className="container">
              <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
              <div className="search-section">
                <input 
                  type="text" 
                  placeholder="eg. Doctor, specialisation, clinic name"
                  className="search-input"
                />
                <Link to="/find-doctors" className="search-btn">
                  Find Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-doctor">
        <div className="container">
          <DoctorProfile />
        </div>
      </section>
    </div>
  );
};

export default Home;