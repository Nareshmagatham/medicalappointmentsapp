import React, { useState, useEffect } from 'react';
import FilterSection from '../components/FilterSection';
import DoctorList from '../components/DoctorList';
import { doctorsData } from '../data';
import '../styles/components.css';

const FindDoctors = () => {
  const [filters, setFilters] = useState({
    location: '',
    searchQuery: '',
    expertise: '',
    gender: '',
    fees: '',
    languages: ''
  });

  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  const [activeFilters, setActiveFilters] = useState({});

 
  useEffect(() => {
    let results = doctorsData;

  
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      results = results.filter(doctor =>
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialization.toLowerCase().includes(query) ||
        doctor.languages.some(lang => lang.toLowerCase().includes(query))
      );
    }

    if (filters.location) {
      results = results.filter(doctor =>
        doctor.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.expertise) {
      results = results.filter(doctor =>
        doctor.specialization.toLowerCase().includes(filters.expertise.toLowerCase())
      );
    }

    if (filters.gender) {
      results = results.filter(doctor =>
        doctor.gender?.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    if (filters.fees) {
      results = results.filter(doctor => {
        const price = doctor.videoPrice;
        switch (filters.fees) {
          case 'Rs.0-Rs.500':
            return price <= 500;
          case 'Rs.500-Rs.1000':
            return price > 500 && price <= 1000;
          case 'Rs.1000-Rs.2000':
            return price > 1000 && price <= 2000;
          case 'Rs.2000+':
            return price > 2000;
          default:
            return true;
        }
      });
    }

   
    if (filters.languages) {
      results = results.filter(doctor =>
        doctor.languages.some(lang => 
          lang.toLowerCase().includes(filters.languages.toLowerCase())
        )
      );
    }

    setFilteredDoctors(results);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));

    if (value) {
      setActiveFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    } else {
      setActiveFilters(prev => {
        const newFilters = { ...prev };
        delete newFilters[filterType];
        return newFilters;
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
   
    console.log('Searching with filters:', filters);
  };

  const removeFilter = (filterType) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: ''
    }));

    setActiveFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[filterType];
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setFilters({
      location: '',
      searchQuery: '',
      expertise: '',
      gender: '',
      fees: '',
      languages: ''
    });
    setActiveFilters({});
  };

  return (
    <div className="find-doctors-page">
      <div className="container">
        <div className="page-header">
          <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
          
         
          <form onSubmit={handleSearch} className="search-section">
            <div className="search-input-group">
              <select 
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="location-select"
              >
                <option value="">Select Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="chennai">Chennai</option>
              </select>
              
              <input 
                type="text" 
                value={filters.searchQuery}
                onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                placeholder="eg. Doctor, specialisation, clinic name"
                className="search-input"
              />
              
              <button type="submit" className="search-btn">
                <span className="search-icon">🔍</span>
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="filters-section">
          <FilterSection 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          
         
          {Object.keys(activeFilters).length > 0 && (
            <div className="active-filters">
              <div className="active-filters-header">
                <h4>Active Filters:</h4>
                <button onClick={clearAllFilters} className="clear-all-btn">
                  Clear All
                </button>
              </div>
              <div className="active-filters-list">
                {Object.entries(activeFilters).map(([key, value]) => 
                  value && (
                    <span key={key} className="active-filter">
                      {value} 
                      <button 
                        onClick={() => removeFilter(key)}
                        className="remove-filter-btn"
                      >
                        ×
                      </button>
                    </span>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        
        <div className="results-info">
          <p>
            Found <strong>{filteredDoctors.length}</strong> doctor{filteredDoctors.length !== 1 ? 's' : ''} 
            {Object.keys(activeFilters).length > 0 ? ' matching your criteria' : ''}
          </p>
        </div>

        {filteredDoctors.length > 0 ? (
          <DoctorList doctors={filteredDoctors} />
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No doctors found</h3>
            <p>Try adjusting your search criteria or filters</p>
            <button onClick={clearAllFilters} className="btn-primary">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctors;