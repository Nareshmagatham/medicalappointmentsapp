import React from 'react';
import '../styles/components.css';

const AppointmentSection = ({ selectedSession, setSelectedSession, selectedSlot, setSelectedSlot }) => {
  const sessions = [
    { type: "In-clinic", price: "1000", duration: "1 hour" }
  ];

  const timeSlots = [
    { day: "Mon", date: "10 Oct", time: "9:00 AM", available: true },
    { day: "Tue", date: "11 Oct", time: "10:00 AM", available: true },
    { day: "Wed", date: "12 Oct", time: "11:00 AM", available: true }
  ];

  const nursingSlots = [
    { date: "01/12/2025", status: "GOC PA" },
    { date: "10/12/2025", status: "GOC PA" },
    { date: "21/03/2026", status: "GOC PA" },
    { date: "01/04/2026", status: "GOC PA" }
  ];

  return (
    <div className="appointment-section">
      <h4>Appointment Fee</h4>
      
      <div className="session-selection">
        <h5>Select your mode of session</h5>
        <div className="session-options">
          {sessions.map((session, index) => (
            <div key={index} className="session-card">
              <div className="session-type">{session.type}</div>
              <div className="session-price">{session.price}</div>
              <div className="session-duration">{session.duration}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="time-slots">
        <h5>Pick a time slot</h5>
        <div className="slot-grid">
          {timeSlots.map((slot, index) => (
            <div key={index} className={`time-slot ${slot.available ? 'available' : 'unavailable'}`}>
              <div className="slot-day">{slot.day}</div>
              <div className="slot-date">{slot.date}</div>
              <div className="slot-time">{slot.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="nursing-section">
        <h5>Nursing</h5>
        <div className="nursing-grid">
          {nursingSlots.map((slot, index) => (
            <div key={index} className="nursing-slot">
              <div className="nursing-date">{slot.date}</div>
              <div className="nursing-status">{slot.status}</div>
            </div>
          ))}
        </div>
      </div>

      <button className="book-appointment-btn">Book An Appointment</button>

      <div className="patient-equipment">
        <p>Registered nurses can earn 50 per cent more noticeable difference, not even larger than average for longer periods.</p>
      </div>
    </div>
  );
};

export default AppointmentSection;