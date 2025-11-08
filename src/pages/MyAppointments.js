import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const appointments = {
    upcoming: [
      {
        id: 'APT001',
        doctorName: 'Dr. Prerna Narang',
        specialization: 'Male-Female Infertility Specialist',
        date: '2025-12-15',
        time: '10:00 AM',
        type: 'Video Consultation',
        status: 'Confirmed',
        price: '₹1800',
        duration: '30 mins'
      },
      {
        id: 'APT002',
        doctorName: 'Dr. Rajesh Kumar',
        specialization: 'Cardiologist',
        date: '2026-01-20',
        time: '2:30 PM',
        type: 'In-Clinic Visit',
        status: 'Confirmed',
        price: '₹1500',
        duration: '45 mins'
      }
    ],
    completed: [
      {
        id: 'APT003',
        doctorName: 'Dr. Priya Sharma',
        specialization: 'Dermatologist',
        date: '2025-11-05',
        time: '11:00 AM',
        type: 'Chat Consultation',
        status: 'Completed',
        price: 'Free',
        duration: '20 mins'
      }
    ],
    cancelled: [
      {
        id: 'APT004',
        doctorName: 'Dr. Amit Patel',
        specialization: 'Orthopedic',
        date: '2025-11-08',
        time: '3:00 PM',
        type: 'Video Consultation',
        status: 'Cancelled',
        price: '₹1200',
        duration: '30 mins'
      }
    ]
  };

  const handleCancelAppointment = (appointmentId) => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      alert(`Appointment ${appointmentId} has been cancelled.`);
      
    }
  };

  const handleReschedule = (appointmentId) => {
    alert(`Reschedule functionality for ${appointmentId} would open here.`);
  };

  const handleJoinConsultation = (appointmentId) => {
    alert(`Joining consultation for ${appointmentId}`);
  };

  const renderAppointmentCard = (appointment) => (
    <div key={appointment.id} className="appointment-card">
      <div className="appointment-header">
        <div className="appointment-info">
          <h3>{appointment.doctorName}</h3>
          <p className="specialization">{appointment.specialization}</p>
          <div className="appointment-meta">
            <span className="appointment-date">
              📅 {appointment.date} at {appointment.time}
            </span>
            <span className="appointment-type">• {appointment.type}</span>
            <span className="appointment-duration">• {appointment.duration}</span>
          </div>
        </div>
        <div className="appointment-status">
          <span className={`status-badge status-${appointment.status.toLowerCase()}`}>
            {appointment.status}
          </span>
          <div className="appointment-price">{appointment.price}</div>
        </div>
      </div>
      
      <div className="appointment-actions">
        {appointment.status === 'Confirmed' && (
          <>
            <button 
              className="btn-primary"
              onClick={() => handleJoinConsultation(appointment.id)}
            >
              Join Consultation
            </button>
            <button 
              className="btn-secondary"
              onClick={() => handleReschedule(appointment.id)}
            >
              Reschedule
            </button>
            <button 
              className="btn-danger"
              onClick={() => handleCancelAppointment(appointment.id)}
            >
              Cancel
            </button>
          </>
        )}
        
        {appointment.status === 'Completed' && (
          <>
            <button className="btn-primary">
              View Prescription
            </button>
            <button className="btn-secondary">
              Download Invoice
            </button>
            <button className="btn-primary">
              Book Again
            </button>
          </>
        )}
        
        {appointment.status === 'Cancelled' && (
          <button className="btn-primary">
            Book New Appointment
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="appointments-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; 
          <span>My Appointments</span>
        </nav>

        <div className="page-header">
          <h1>My Appointments</h1>
          <p>Manage your upcoming and past appointments</p>
        </div>

        {/* Tabs */}
        <div className="appointments-tabs">
          <button 
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming ({appointments.upcoming.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed ({appointments.completed.length})
          </button>
          <button 
            className={`tab-button ${activeTab === 'cancelled' ? 'active' : ''}`}
            onClick={() => setActiveTab('cancelled')}
          >
            Cancelled ({appointments.cancelled.length})
          </button>
        </div>

        {/* Appointments List */}
        <div className="appointments-list">
          {appointments[activeTab].length > 0 ? (
            appointments[activeTab].map(renderAppointmentCard)
          ) : (
            <div className="no-appointments">
              <div className="empty-state">
                <div className="empty-icon">📅</div>
                <h3>No {activeTab} appointments</h3>
                <p>
                  {activeTab === 'upcoming' 
                    ? "You don't have any upcoming appointments. Book one now!"
                    : `You don't have any ${activeTab} appointments.`
                  }
                </p>
                {activeTab === 'upcoming' && (
                  <Link to="/find-doctors" className="btn-primary">
                    Find Doctors
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

   
        <div className="appointments-stats">
          <div className="stat-card">
            <div className="stat-number">{appointments.upcoming.length}</div>
            <div className="stat-label">Upcoming</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{appointments.completed.length}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{appointments.cancelled.length}</div>
            <div className="stat-label">Cancelled</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {appointments.upcoming.length + appointments.completed.length + appointments.cancelled.length}
            </div>
            <div className="stat-label">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;