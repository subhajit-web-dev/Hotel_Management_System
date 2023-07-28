

import React from 'react';

const ExploreMumbai = () => {
  // Function to redirect to the new page
    const redirectToExploreMumbai= () => {
        // Redirect to the "/explorekolkata" page.
        window.location.href = "/exploreMumbai";
    };

    return (
        <div>
        {/* The image element */}
        <img
            src="mumbai.jpg"
            alt="Mumbai"
            style={{ cursor: 'pointer' }}
            onClick={redirectToExploreMumbai}
        />
        </div>
    );
    };

export default ExploreMumbai;
