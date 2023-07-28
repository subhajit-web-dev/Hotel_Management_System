// exploreKolkata.jsx

import React from 'react';

const ExploreChennai = () => {
  // Function to redirect to the new page
    const redirectToExploreChennai = () => {
        // Redirect to the "/explorekolkata" page.
        window.location.href = "/explorechennai";
    };

    return (
        <div>
        <img
            src="kolkataImage.jpg"
            alt="Kolkata"
            style={{ cursor: 'pointer' }}
            onClick={redirectToExploreChennai}
        />
        </div>
    );
    };

export default ExploreChennai;