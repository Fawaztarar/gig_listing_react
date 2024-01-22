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
          eventDescription="An amazing live performance by Awesome Band. Join us for a night of great music and entertainment."
          eventTime="2024-02-01, 7:00 PM"
          eventLocation="Concert Hall"
        />
        <Gig
          bandName="Groovy Ensemble"
          eventDescription="Get ready to dance and groove with the energetic tunes of Groovy Ensemble. Don't miss this electrifying performance!"
          eventTime="2024-02-15, 8:30 PM"
          eventLocation="Dance Club"
        />
        {/* Add more Gig components for additional listings */}
      </div>
    </div>
  );
};

export default App;



