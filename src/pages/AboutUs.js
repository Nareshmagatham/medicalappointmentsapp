import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="container">
    
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; 
          <span>About Us</span>
        </nav>

      
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>ABOUT KSHIRAM</h1>
            <p className="hero-subtitle">Revolutionizing Healthcare Access Through Technology</p>
          </div>
        </section>

     
        <section className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                kshiram is a pioneering initiative of Narmada Hospitals, established in December 2021 
                by visionary healthcare entrepreneur Narayan Patel. Born out of a commitment to make 
                quality healthcare accessible to everyone, Amrutham represents a significant leap forward 
                in digital healthcare solutions.
              </p>
              
              <p>
                Our platform is dedicated to providing comprehensive online medical services, including 
                easy access to medicines, virtual consultations with expert doctors, and personalized 
                healthcare management. We understand the challenges people face in accessing timely 
                medical care, especially in remote areas, and we've built Amrutham to bridge this gap 
                through innovative technology.
              </p>

              <p>
                At kshiram, we believe that healthcare should be convenient, affordable, and available 
                to all. Our platform connects patients with trusted healthcare providers, ensures 
                genuine medicine delivery, and offers 24/7 medical support. We're committed to 
                transforming the healthcare landscape by leveraging digital innovation to create 
                a healthier, happier society.
              </p>

              <div className="mission-vision">
                <div className="mission-card">
                  <h3>Our Mission</h3>
                  <p>
                    To make quality healthcare accessible and affordable for every individual 
                    through innovative digital solutions, ensuring timely medical assistance 
                    and genuine medicines at their doorstep.
                  </p>
                </div>
                
                <div className="vision-card">
                  <h3>Our Vision</h3>
                  <p>
                    To become India's most trusted digital healthcare platform, revolutionizing 
                    the way people access medical services and creating a healthier nation 
                    through technology-enabled care.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Happy Patients</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Expert Doctors</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Cities Served</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Medical Support</div>
              </div>
            </div>
          </div>
        </section>

   
        <section className="founder-section">
          <div className="founder-content">
            <div className="founder-image">
              <div className="founder-avatar">
                NP
              </div>
            </div>
            <div className="founder-info">
              <h3>Narayan Patel</h3>
              <p className="founder-title">Founder & CEO</p>
              <p className="founder-quote">
                "We started kshiram with a simple vision: to make quality healthcare accessible 
                to every Indian. In today's digital age, no one should have to struggle to get 
                medical help or genuine medicines. Our platform is built on trust, innovation, 
                and a deep commitment to patient care."
              </p>
              <div className="founder-details">
                <div className="detail-item">
                  <strong>Established:</strong> December 2021
                </div>
                <div className="detail-item">
                  <strong>Initiative of:</strong> Narmada Hospitals
                </div>
                <div className="detail-item">
                  <strong>Headquarters:</strong> Anantapur, India
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="services-section">
          <h2>What We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💊</div>
              <h4>Online Medicine</h4>
              <p>Authentic medicines delivered to your doorstep with guaranteed quality and safety.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">👨‍⚕️</div>
              <h4>Doctor Consultation</h4>
              <p>Connect with expert doctors for virtual consultations from the comfort of your home.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h4>In-Clinic Sessions</h4>
              <p>Book appointments for in-person consultations with specialized healthcare providers.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h4>Health Records</h4>
              <p>Digital storage of your medical history and prescriptions for easy access.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;