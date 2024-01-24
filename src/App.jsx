// App.jsx

import React, { useState } from 'react';
import Gig from './Gig';
import './App.css'; // Assuming you have a CSS file for App

const App = () => {
  const [gigs, setGigs] = useState([
    {
      id: 1,
      bandName: "Awesome Band",
      bandImage: "src/assets/band.jpg",
      eventDescription: "An amazing live performance by Awesome Band. Join us for a night of great music and entertainment.",
      eventTime: "2024-02-01, 7:00 PM",
      eventLocation: "Concert Hall",
      favorited: false,
    },
    {
      id: 2,
      bandName: "Groovy Ensemble",
      bandImage: "src/assets/band2.jpg",
      eventDescription: "Get ready to dance and groove with the energetic tunes of Groovy Ensemble. Don't miss this electrifying performance!",
      eventTime: "2024-02-15, 8:30 PM",
      eventLocation: "Dance Club",
      favorited: true,
    },
    {
      id: 3,
      bandName: "Rockin' Group",
      bandImage: "src/assets/band3.jpg",
      eventDescription: "Rock out with Rockin' Group as they perform their latest hits and greatest classics. It's going to be a wild night!",
      eventTime: "2024-03-01, 9:00 PM",
      eventLocation: "Stadium",
      favorited: false,
    },
    {
      id: 4,
      bandName: "Funky Band",
      bandImage: "src/assets/band4.jpg",
      eventDescription: "Join us for a night of funk and soul with Funky Band. You'll be dancing all night long!",
      eventTime: "2024-03-15, 8:00 PM",
      eventLocation: "Dance Club",
      favorited: true,
    },
    // Add more Gig objects for additional listings
  ]);

  const toggleFavorite = (id) => {
    setGigs(gigs.map(gig => 
      gig.id === id ? { ...gig, favorited: !gig.favorited } : gig
    ));
  };

  const sortedGigs = gigs.slice().sort((a, b) => (b.favorited ? 1 : -1));

  return (
    <div className="app-container">
      <h1 className="app-title">Upcoming Gigs</h1>
      <div className="gigs-list">
        {sortedGigs.map((gig) => (
          <Gig 
            key={gig.id}
            bandName={gig.bandName}
            bandImage={gig.bandImage}
            eventTime={gig.eventTime}
            eventDescription={gig.eventDescription}
            eventLocation={gig.eventLocation}
            favorited={gig.favorited}
            onToggleFavorite={() => toggleFavorite(gig.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;


