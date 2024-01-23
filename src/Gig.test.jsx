// Gig.test.jsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import Gig from './Gig';

describe('Gig Component', () => {
const gigProps = {
    bandName: 'Awesome Band',
    eventDescription: 'An amazing live performance by Awesome Band. Join us for a night of great music and entertainment.',
    eventTime: '2024-02-01, 7:00 PM',
    eventLocation: 'Concert Hall',
};

it('renders gig information correctly', () => {
    render(<Gig {...gigProps} />);

    // Check if the rendered text matches the expected values
    expect(screen.getByText(gigProps.bandName)).toBeInTheDocument();
    expect(screen.getByText(gigProps.eventDescription)).toBeInTheDocument();
    expect(screen.getByText(gigProps.eventTime)).toBeInTheDocument();
    expect(screen.getByText(gigProps.eventLocation)).toBeInTheDocument();

    // Check if the band image alt attribute is set correctly
    const bandImage = screen.getByAltText(gigProps.bandName);
    expect(bandImage).toBeInTheDocument();
    expect(bandImage.src).toContain('/assets/band.jpg'); // Assuming the image path is correct
});

  // Add more tests as needed for different gig instances
});
