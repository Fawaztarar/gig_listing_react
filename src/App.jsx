// App.jsx
import React, { useState } from 'react';
import Gig from './Gig';

const App = () => {
  const [gigs, setGigs] = useState([
    {
      id: 1,
      bandName: "Awesome Band",
      bandImage: "./assets/band.jpg",
      eventDescription: "An amazing live performance by Awesome Band. Join us for a night of great music and entertainment.",
      eventTime: "2024-02-01, 7:00 PM",
      eventLocation: "Concert Hall",
      favorited: false,
    },
    {
      id: 2,
      bandName: "Groovy Ensemble",
      bandImage: "./assets/band2.jpg",
      eventDescription: "Get ready to dance and groove with the energetic tunes of Groovy Ensemble. Don't miss this electrifying performance!",
      eventTime: "2024-02-15, 8:30 PM",
      eventLocation: "Dance Club",
      favorited: true,
    },
    {
      id: 3,
      bandName: "Rockin' Group",
      bandImage: "./assets/band3.jpg",
      eventDescription: "Rock out with Rockin' Group as they perform their latest hits and greatest classics. It's going to be a wild night!",
      eventTime: "2024-03-01, 9:00 PM",
      eventLocation: "Stadium",
      favorited: false,
    },
    {
      id: 4,
      bandName: "Funky Band",
      bandImage: "./assets/band4.jpg",
      eventDescription: "Join us for a night of funk and soul with Funky Band. You'll be dancing all night long!",
      eventTime: "2024-03-15, 8:00 PM",
      eventLocation: "Dance Club",
      favorited: true,
    },
    // Add more Gig objects for additional listings
  ]);

  // Function to toggle the favorite status of a gig
  const toggleFavorite = (id) => {
    setGigs((prevGigs) =>
      prevGigs.map((gig) =>
        gig.id === id ? { ...gig, favorited: !gig.favorited } : gig
      )
    );
  };

  // Sort gigs so that favorited gigs come first
  const sortedGigs = gigs.slice().sort((a, b) => (b.favorited ? 1 : -1));

  return (
    <div className="app-container">
      <h1 className="app-title">Upcoming Gigs</h1>
      <div className="gigs-list">
        {sortedGigs.map((gig) => (
          <Gig key={gig.id} {...gig} onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  );
};

export default App;




