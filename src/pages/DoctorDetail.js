import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doctorsData } from '../data';
import '../styles/components.css';

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));
  const [selectedSession, setSelectedSession] = useState('in-clinic');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const reviews = [
    {
      name: "Christian James",
      title: "Overhaul for Sessions",
      comment: "We are also able to understand that our individual different is truly visible, will come again after using a lot to cope practical.",
      rating: 5
    },
    {
      name: "Raghu",
      title: "Outstanding Polyphony",
      comment: "She has my PhD",
      rating: 5
    }
  ];

  const timeSlots = [
    { id: 1, day: "Mon", date: "10 Oct", time: "9:00 AM", available: true },
    { id: 2, day: "Tue", date: "11 Oct", time: "10:00 AM", available: true },
    { id: 3, day: "Wed", date: "12 Oct", time: "11:00 AM", available: true },
    { id: 4, day: "Thu", date: "13 Oct", time: "2:00 PM", available: true },
    { id: 5, day: "Fri", date: "14 Oct", time: "3:00 PM", available: true },
    { id: 6, day: "Sat", date: "15 Oct", time: "4:00 PM", available: false }
  ];

  const nursingSlots = [
    { date: "01/03/2026", status: "GOC PA" },
    { date: "01/12/2025", status: "GOC PA" },
    { date: "10/12/2025", status: "GOC PA" },
    { date: "01/04/2026", status: "GOC PA" }
  ];

  const handleTimeSlotSelect = (slot) => {
    if (slot.available) {
      setSelectedTime(slot.time);
      setSelectedDate(slot.date);
    }
  };

  const handleBookAppointment = () => {
    if (!selectedTime) {
      alert('Please select a time slot for your appointment.');
      return;
    }

    const booking = {
      doctorName: doctor.name,
      doctorSpecialization: doctor.specialization,
      sessionType: selectedSession,
      date: selectedDate,
      time: selectedTime,
      appointmentId: 'APT' + Date.now(),
      bookingDate: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };

    setBookingData(booking);
    setBookingSuccess(true);

  
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedTime('');
      setSelectedDate('');
    }, 5000);
  };

  const handleBookConsultation = (type) => {
    const consultation = {
      doctorName: doctor.name,
      type: type,
      price: type === 'video' ? doctor.videoPrice : 'Free',
      bookingId: 'CONS' + Date.now(),
      status: 'Pending'
    };

    alert(`${type.charAt(0).toUpperCase() + type.slice(1)} Consultation booked with ${doctor.name}! \nPrice: ${consultation.price}\nBooking ID: ${consultation.bookingId}`);
  };

  if (bookingSuccess) {
    return (
      <div className="booking-success-page">
        <div className="container">
          <div className="success-card">
            <div className="success-icon">✅</div>
            <h2>Appointment Booked Successfully!</h2>
            <div className="booking-details">
              <div className="detail-row">
                <strong>Appointment ID:</strong> {bookingData.appointmentId}
              </div>
              <div className="detail-row">
                <strong>Doctor:</strong> Dr. {bookingData.doctorName}
              </div>
              <div className="detail-row">
                <strong>Specialization:</strong> {bookingData.doctorSpecialization}
              </div>
              <div className="detail-row">
                <strong>Session Type:</strong> {bookingData.sessionType}
              </div>
              <div className="detail-row">
                <strong>Date:</strong> {bookingData.date}
              </div>
              <div className="detail-row">
                <strong>Time:</strong> {bookingData.time}
              </div>
              <div className="detail-row">
                <strong>Status:</strong> <span className="status-confirmed">{bookingData.status}</span>
              </div>
            </div>
            <div className="success-actions">
              <button 
                className="btn-primary"
                onClick={() => setBookingSuccess(false)}
              >
                Book Another Appointment
              </button>
              <Link to="/find-doctors" className="btn-secondary">
                Find More Doctors
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="doctor-detail-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; 
          <Link to="/find-doctors">Find Doctors</Link> &gt; 
          <span>Dr. Profile</span>
        </nav>

        <div className="doctor-detail-layout">
          {/* Left Side - Doctor Information */}
          <div className="doctor-info-section">
            <div className="doctor-header">
              <div className="doctor-avatar">
                <img 
          src="/images/doctor1.png" 
          alt="Dr. Nakshatra Patel"
          className="doctor-profile-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
                <div className="avatar-placeholder">DR</div>
              </div>
              <div className="doctor-basic-info">
                <h1>Dr. Nakshatra Patel</h1>
                <p className="specialization">Dermatologist</p>
                <p className="experience">7+ years of experience</p>
                <div className="languages">
                  <strong>Speaks:</strong> English, Hindi, Telugu
                </div>
                <div className="rating">
                  ⭐⭐⭐⭐⭐ (4.8/5)
                </div>
              </div>
            </div>
            <section className="detail-section">
              <h2>A Little About me</h2>
              <p className="about-text">
                Nick Irene G. Davis with the Spanishologist's leading principal in focus on its world 
                with a mysterious and new interior exterior, Completes my grandfather in Gymnasiosque 
                Islanders from the Black Book
              </p>
            </section>
            <section className="detail-section">
              <h3>Language Scales</h3>
              <div className="tags">
                <span className="tag active">English</span>
                <span className="tag active">Hindi</span>
                <span className="tag active">Telugu</span>
              </div>
            </section>
            <section className="detail-section">
              <h3>Specialize In</h3>
              <div className="specializations-grid">
                <div className="specialty-card">
                  <h4>Woman's health</h4>
                  <p>Specialized care for women's health issues</p>
                </div>
                <div className="specialty-card">
                  <h4>360 Echo</h4>
                  <p>Comprehensive echocardiography services</p>
                </div>
                <div className="specialty-card">
                  <h4>Humanity</h4>
                  <p>Patient-centered compassionate care</p>
                </div>
                <div className="specialty-card">
                  <h4>Red Clan</h4>
                  <p>Specialized treatment protocols</p>
                </div>
              </div>
            </section>
            <section className="detail-section">
              <h3>The Concerns I Treat</h3>
              <div className="concerns-grid">
                <span className="concern-tag">Solo Investment</span>
                <span className="concern-tag">Polyphony</span>
                <span className="concern-tag">Failed Doubles</span>
                <span className="concern-tag">Entrancebacks</span>
                <span className="concern-tag">Paule-Quin</span>
                <span className="concern-tag">Quattro Cyrus</span>
                <span className="concern-tag">4 Years</span>
              </div>
            </section>
            <section className="detail-section">
              <h3>My Work Experience</h3>
              <div className="experience-timeline">
                <div className="experience-item">
                  <div className="exp-header">
                    <h4>THANK BEGINN PRACTICE FOR 7+ YEARS</h4>
                    <span className="exp-duration">7+ Years</span>
                  </div>
                  <div className="clinic-info">
                    <strong>Welcome Medical Clinic</strong>
                    <p>With chronic welcome medical clinic Inside cancer</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="detail-section">
              <h3>Featured Reviews (102)</h3>
              <div className="reviews-section">
                {reviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h5>{review.name}</h5>
                        <span className="review-title">{review.title}</span>
                      </div>
                      <div className="review-rating">
                        {'⭐'.repeat(review.rating)}
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
                <button className="view-all-reviews-btn">
                  View All 102 Reviews
                </button>
              </div>
            </section>
          </div>
          <div className="appointment-sidebar">
            <div className="booking-card">
              <h3>Appointment Fee</h3>

              <div className="session-selection">
                <h4>Select your mode of session</h4>
                <div className="session-options">
                  <div 
                    className={`session-option ${selectedSession === 'in-clinic' ? 'selected' : ''}`}
                    onClick={() => setSelectedSession('in-clinic')}
                  >
                    <div className="session-type">In-clinic & Give</div>
                    <div className="session-price">Value @ {"<1 Live>"}</div>
                    <div className="session-duration">£x #, 10 Free</div>
                  </div>
                </div>
              </div>

              <div className="time-slots-section">
                <h4>Pick a time slot</h4>
                <div className="time-slots-grid">
                  {timeSlots.map((slot) => (
                    <div 
                      key={slot.id}
                      className={`time-slot ${slot.available ? 'available' : 'unavailable'} ${selectedTime === slot.time ? 'selected' : ''}`}
                      onClick={() => handleTimeSlotSelect(slot)}
                    >
                      <div className="slot-day">{slot.day}</div>
                      <div className="slot-date">{slot.date}</div>
                      <div className="slot-time">{slot.time}</div>
                      {!slot.available && <div className="slot-status">Full</div>}
                    </div>
                  ))}
                </div>
                {selectedTime && (
                  <div className="selected-slot-info">
                    <strong>Selected: </strong>{selectedDate} at {selectedTime}
                  </div>
                )}
              </div>

            
              <div className="nursing-section">
                <h4>Nursing</h4>
                <div className="nursing-slots">
                  {nursingSlots.map((slot, index) => (
                    <div key={index} className="nursing-slot">
                      <div className="nursing-date">{slot.date}</div>
                      <div className="nursing-status">{slot.status}</div>
                    </div>
                  ))}
                </div>
              </div>

           
              <button 
                className="book-appointment-btn primary"
                onClick={handleBookAppointment}
                disabled={!selectedTime}
              >
                {selectedTime ? `Book Appointment at ${selectedTime}` : 'Select a Time Slot'}
              </button>

            
              <div className="patient-equipment-info">
                <p>
                  Registered nurses can earn 50 per cent more noticeable difference, 
                  not even larger than average for longer periods.
                </p>
              </div>

          
              <div className="consultation-options">
                <div className="consultation-option">
                  <div className="consult-type">Video Consultation</div>
                  <div className="consult-price">₹{doctor.videoPrice}</div>
                  <button 
                    className="consult-book-btn"
                    onClick={() => handleBookConsultation('video')}
                  >
                    Book Now
                  </button>
                </div>
                <div className="consultation-option">
                  <div className="consult-type">Chat Consultation</div>
                  <div className="consult-price">Free</div>
                  <button 
                    className="consult-book-btn"
                    onClick={() => handleBookConsultation('chat')}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;