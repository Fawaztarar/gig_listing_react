// // Gig.jsx

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Gig.css';


// const Gig = ({ bandImage, bandName, eventDescription, eventTime, eventLocation }) => {
//   const [isFavorited, setIsFavorited] = useState(false);

//   const handleFavoriteToggle = () => {
//     setIsFavorited(!isFavorited);
//   };

//   return (
//     <div className="gig-container">
//       <img className="band-image" src={bandImage} alt={bandName} />
//       <div className="details-container">
//         <h3 className="band-name">{bandName}</h3>
//         <p className="event-description">{eventDescription}</p>
//         <p className="event-time">{eventTime}</p>
//         <p className="event-location">{eventLocation}</p>
        
//         {/* Favorite button */}
//         <button onClick={handleFavoriteToggle}>
//           {isFavorited ? 'Unfavorite' : 'Favorite'}
//         </button>

//         {/* Display favorite status */}
//         {isFavorited && <p className="favorite-status">Favorited!</p>}
//       </div>
//     </div>
//   );
// };

// Gig.propTypes = {
//   bandName: PropTypes.string.isRequired,
//   bandImage: PropTypes.string.isRequired,
//   eventDescription: PropTypes.string.isRequired,
//   eventTime: PropTypes.string.isRequired,
//   eventLocation: PropTypes.string.isRequired,
// };

// export default Gig;

import React from 'react';
import PropTypes from 'prop-types';
import './Gig.css';

const Gig = ({ bandImage, bandName, eventDescription, eventTime, eventLocation, favorited, onToggleFavorite }) => {
  return (
    <div className="gig-container">
      <img className="band-image" src={bandImage} alt={bandName} />
      <div className="details-container">
        <h3 className="band-name">{bandName}</h3>
        <p className="event-description">{eventDescription}</p>
        <p className="event-time">{eventTime}</p>
        <p className="event-location">{eventLocation}</p>
        
        <button onClick={onToggleFavorite}>
          {favorited ? 'Unfavorite' : 'Favorite'}
        </button>

        {favorited && <p className="favorite-status">Favorited!</p>}
      </div>
    </div>
  );
};

Gig.propTypes = {
  bandName: PropTypes.string.isRequired,
  bandImage: PropTypes.string.isRequired,
  eventDescription: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  eventLocation: PropTypes.string.isRequired,
  favorited: PropTypes.bool.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Gig;






