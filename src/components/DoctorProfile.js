import React, { useState } from 'react';
import AppointmentSection from './AppointmentSection';
import '../styles/components.css';

const DoctorProfile = () => {
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const reviews = [
    {
      name: "Allocare Highlander",
      title: "Overhaul for Sessions",
      comment: "We are also able to understand that our individual different is truly visible, will come again after using a lot to cope practical."
    },
    {
      name: "Allocare Highlander",
      title: "Outstanding Polyphony",
      comment: "She has my PhD"
    }
  ];

 
};

export default DoctorProfile;