import React from 'react';
import '../styles/components.css';

const FilterSection = ({ filters, onFilterChange }) => {
  const filterOptions = {
    expertise: ['Dermatology', 'Cardiology', 'Pediatrics', 'Orthopedics', 'Dentistry', 'Gynecology'],
    gender: ['Male', 'Female'],
    fees: ['Rs.0-Rs.500', 'Rs.500-Rs.1000', 'Rs.1000-Rs.2000', 'Rs.2000+'],
    languages: ['English', 'Hindi', 'Telugu', 'Marathi', 'Tamil', 'Bengali']
  };

  return (
    <div className="filter-section">
      <div className="filter-header">
        <h3>Filters</h3>
      </div>
      <div className="filter-grid">
        {Object.entries(filterOptions).map(([filterType, options]) => (
          <div key={filterType} className="filter-group">
            <label className="filter-label">{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</label>
            <select 
              value={filters[filterType]} 
              onChange={(e) => onFilterChange(filterType, e.target.value)}
              className="filter-select"
            >
              <option value="">Select {filterType}</option>
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button className="all-filters-btn">
        All filters
      </button>
    </div>
  );
};

export default FilterSection;