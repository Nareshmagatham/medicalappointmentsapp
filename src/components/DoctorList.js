import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const DoctorList = ({ doctors }) => {
  const handleBookConsultation = (doctor, type) => {
    const price = type === 'video' ? doctor.videoPrice : 'Free';
    const consultationType = type === 'video' ? 'Video' : 'Chat';
    
    alert(`${consultationType} Consultation booked with ${doctor.name}!\nPrice: ${price}\nYou will be redirected to payment page.`);
  };

  return (
    <div className="doctor-list">
      {doctors.map((doctor, index) => (
        <div key={index} className="doctor-card">
          <div className="doctor-info">
            <h3>{doctor.name}</h3>
            <p className="specialization">{doctor.specialization}</p>
            <p className="experience">{doctor.experience} years of Experience</p>
            <p className="languages">Speaks: {doctor.languages.join(', ')}</p>
          </div>
          
          <div className="consultation-options">
            <div className="consultation-type">
              <div className="type">Video Consultation</div>
              <div className="price">₹{doctor.videoPrice}</div>
              <button 
                className="book-now-btn"
                onClick={() => handleBookConsultation(doctor, 'video')}
              >
                Book Now
              </button>
            </div>
            <div className="consultation-type">
              <div className="type">Chat Consultation</div>
              <div className="price">{doctor.chatPrice === 0 ? 'Free' : `₹${doctor.chatPrice}`}</div>
              <button 
                className="book-now-btn"
                onClick={() => handleBookConsultation(doctor, 'chat')}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="doctor-actions">
            <Link to={`/doctor/${doctor.id}`} className="view-profile-btn">
              View Profile
            </Link>
            <Link to={`/doctor/${doctor.id}`} className="book-consultation-btn">
              Book Clinic Visit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;