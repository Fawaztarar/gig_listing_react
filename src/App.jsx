// App.jsx
import React from 'react';
import Gig from './Gig';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Upcoming Gigs</h1>
      <div className="gigs-list">
        <Gig
          bandName="Awesome Band"
          bandImage="./assets/band.jpg"
          eventDescription="An amazing live performance by Awesome Band. Join us for a night of great music and entertainment."
          eventTime="2024-02-01, 7:00 PM"
          eventLocation="Concert Hall"
        />
        <Gig
          bandName="Groovy Ensemble"
          bandImage="./assets/band2.jpg"
          eventDescription="Get ready to dance and groove with the energetic tunes of Groovy Ensemble. Don't miss this electrifying performance!"
          eventTime="2024-02-15, 8:30 PM"
          eventLocation="Dance Club"
        />
        <Gig
          bandName="Rockin' Group"
          bandImage="./assets/band3.jpg"
          eventDescription="Rock out with Rockin' Group as they perform their latest hits and greatest classics. It's going to be a wild night!"
          eventTime="2024-03-01, 9:00 PM"
          eventLocation="Stadium"
        />
        {/* Add more Gig components for additional listings */}
      </div>
    </div>
  );
};

export default App;



