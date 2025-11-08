import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const MyProfile = () => {
  const [user, setUser] = useState({
    name: 'Nischay',
    email: 'nischaymanchen@gmail.com',
    phone: '+91 9876543210',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    bloodGroup: 'O+',
    address: '123 Main Street, Mumbai, Maharashtra - 400001',
    emergencyContact: {
      name: 'naresh manchen',
      phone: '+91 9876543211',
      relationship: 'brother'
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleEdit = () => {
    setIsEditing(true);
    setFormData({ ...user });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('emergencyContact.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link> &gt; 
          <span>My Profile</span>
        </nav>

        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-large">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="profile-info">
              <h1>{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <p className="profile-member">Member since January 2024</p>
            </div>
          </div>
          <div className="profile-actions">
            {!isEditing ? (
              <button className="btn-primary" onClick={handleEdit}>
                Edit Profile
              </button>
            ) : (
              <div className="edit-actions">
                <button className="btn-primary" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                ) : (
                  <div className="info-value">{user.name}</div>
                )}
              </div>

              <div className="info-item">
                <label>Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                ) : (
                  <div className="info-value">{user.email}</div>
                )}
              </div>

              <div className="info-item">
                <label>Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                ) : (
                  <div className="info-value">{user.phone}</div>
                )}
              </div>

              <div className="info-item">
                <label>Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="form-input"
                  />
                ) : (
                  <div className="info-value">{user.dateOfBirth}</div>
                )}
              </div>

              <div className="info-item">
                <label>Gender</label>
                {isEditing ? (
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <div className="info-value">{user.gender}</div>
                )}
              </div>

              <div className="info-item">
                <label>Blood Group</label>
                {isEditing ? (
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                ) : (
                  <div className="info-value">{user.bloodGroup}</div>
                )}
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Address</h2>
            <div className="info-item full-width">
              {isEditing ? (
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="3"
                />
              ) : (
                <div className="info-value">{user.address}</div>
              )}
            </div>
          </div>

          <div className="profile-section">
            <h2>Emergency Contact</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Contact Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="emergencyContact.name"
                    value={formData.emergencyContact.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                ) : (
                  <div className="info-value">{user.emergencyContact.name}</div>
                )}
              </div>

              <div className="info-item">
                <label>Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="emergencyContact.phone"
                    value={formData.emergencyContact.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                ) : (
                  <div className="info-value">{user.emergencyContact.phone}</div>
                )}
              </div>

              <div className="info-item">
                <label>Relationship</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="emergencyContact.relationship"
                    value={formData.emergencyContact.relationship}
                    onChange={handleChange}
                    className="form-input"
                  />
                ) : (
                  <div className="info-value">{user.emergencyContact.relationship}</div>
                )}
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Medical History</h2>
            <div className="medical-history">
              <div className="no-history">
                <p>No medical history recorded yet.</p>
                <button className="btn-secondary">
                  Upload Medical Records
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;