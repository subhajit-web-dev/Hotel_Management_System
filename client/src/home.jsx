import React from 'react';
import delhiImage from './images/city/delhi.jpeg';
import mumbaiImage from './images/city/mumbai.jpeg';
import chennaiImage from './images/city/chennai.jpeg';
import kolkataImage from './images/city/kolkata.jpeg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <nav style={navStyles}>
            <div style={brandStyles}>laughInn</div>
            <div>
            <button style={buttonStyles}>Home</button>
            <button style={buttonStyles}>My Bookings</button>
            <button style={buttonStyles}>Log Out</button>
            </div>
        </nav>
        <h1 style = {heading}>Our Locations <span style={underlineStyle}></span></h1>
        <div style={containerStyles}>
            <div className="city-item">
            <div style={cardStyles}>
            <Link to="/exploredelhi">
                <img src={delhiImage} alt="Delhi" style={imageStyles} />
            </Link>
                <p style={descriptionStyles}>Discover Delhi - Book Your Hotel Now! </p>
                <h3>Delhi</h3>
                <p>Delhi: Historic Capital, Rich Culture, Vibrant Metropolis. Explore Iconic Landmarks and Bustling Markets.</p>
            </div>
            </div>
            <div className="city-item">
            <p style={descriptionStyles}></p>
            
            <div style={cardStyles}>
            <Link to="/exploremumbai">
                <img src={mumbaiImage} alt="Mumbai" style={imageStyles} />
            </Link>
                <p style={descriptionStyles}>Mumbai Awaits - Book Now!</p>
                <h3>Mumbai</h3>
                <p>Mumbai: Glamorous City, Coastal Charm, Bollywood Hub. Experience the Energy of India's Financial Capital.</p>
            </div>
            </div>
            <div className="city-item">
            <div style={cardStyles}>
            <Link to="/explorechennai">
                <img src={chennaiImage} alt="Chennai" style={imageStyles} />
            </Link>
                <p style={descriptionStyles}>Explore Chennai - Book Your Hotel Stay Today!</p>
                <h3>Chennai</h3>
                <p>Chennai: Coastal Metropolis, Rich Heritage, Cultural Delight. Discover Beautiful Beaches and Temples.</p>
            </div>
            </div>
            <div className="city-item">
            <br></br>
            <div style={cardStyles}>
            <Link to="/explorekolkata">
                <img src={kolkataImage} alt="Kolkata" style={imageStyles} />
            </Link>
                <p style={descriptionStyles}>Discover Kolkata - Book Your Hotel Stay Today!</p>
                <h3>Kolkata</h3>
                <p>Kolkata: City of Joy, Artistic Heritage, Cultural Marvel. Immerse in its Lively Spirit and Rich History.</p>
            </div>
            </div>
        </div>
        
        </div>
    );
}
const heading = {
    textAlign : 'center',
    marginTop : '30px',
    fontSize:'60px',
    color : '#bf360c',
    fontWeight : '500',
}

const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px', 
    height: '2px', 
    backgroundColor: 'black', 
};


const descriptionStyles = {
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};

const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(45deg, orange, pink)',
    padding: '20px',
    color: 'white',
};

const brandStyles = {
    fontSize: '40px',
    fontWeight: 'bold',
};

const buttonStyles = {
    padding: '9px 15px',
    marginLeft: '20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: '#bf360c',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bolder',
};

const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    flexWrap: 'wrap',
};

const imageStyles = {
    width: '600px',
    height: '800px',
    marginBottom: '10px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
};

// Media query for mobile view
const mobileViewMediaQuery = '@media (max-width: 600px)';

// Update image styles for mobile view
const mobileImageStyles = {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
    boxShadow: '0px 5px 16px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
};

const mobileDescriptionStyles = {
    fontSize: '18px',
    margin: '5px 0',
};

const cardStyles = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '600px', 
    marginLeft: '10px', 
    marginTop:'60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'20px',
    boxShadow: '0px 5px 16px rgba(0, 0, 0, 0.25)',
    marginBottom:'10px'
};


// Apply mobile styles for the city items and images
containerStyles[mobileViewMediaQuery] = {
    flexDirection: 'column',
    alignItems: 'center',
};
imageStyles[mobileViewMediaQuery] = mobileImageStyles;
descriptionStyles[mobileViewMediaQuery] = mobileDescriptionStyles;

export default Home;


