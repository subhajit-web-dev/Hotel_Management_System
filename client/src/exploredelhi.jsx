

import React from 'react';

const ExploreDelhi= () => {
  // Function to redirect to the new page
    const redirectToExploreDelhi = () => {
        // Redirect to the "/explorekolkata" page.
        window.location.href = "/exploredelhi";
    };

    return (
        <div>
        {/* The image element */}
        <img
            src="delhiImage.jpg"
            alt="Delhi"
            style={{ cursor: 'pointer' }}
            onClick={redirectToExploreDelhi}
        />
        </div>
    );
    };

export default ExploreDelhi;
