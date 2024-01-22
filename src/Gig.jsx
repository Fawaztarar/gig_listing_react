// Gig.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Gig.css';
import bandImage from "./assets/band.jpg";

const Gig = ({ bandName, eventDescription, eventTime, eventLocation }) => {
  return (
    <div className="gig-container">
      <img className="band-image" src={bandImage} alt={bandName} />
      <div className="details-container">
        <h3 className="band-name">{bandName}</h3>
        <p className="event-description">{eventDescription}</p>
        <p className="event-time">{eventTime}</p>
        <p className="event-location">{eventLocation}</p>
      </div>
    </div>
  );
};

Gig.propTypes = {
  bandName: PropTypes.string.isRequired,
  eventDescription: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventLocation: PropTypes.string.isRequired,
};

export default Gig;



