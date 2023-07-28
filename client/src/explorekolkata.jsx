

import React from 'react';

const ExploreKolkata = () => {
  // Function to redirect to the new page
    const redirectToExploreKolkata = () => {
        // Redirect to the "/explorekolkata" page.
        window.location.href = "/explorekolkata";
    };

    return (
        <div>
        {/* The image element */}
        <img
            src="kolkataImage.jpg"
            alt="Kolkata"
            style={{ cursor: 'pointer' }}
            onClick={redirectToExploreKolkata}
        />
        </div>
    );
    };

export default ExploreKolkata;
