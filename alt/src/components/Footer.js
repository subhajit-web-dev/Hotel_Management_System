


// import { useState, useEffect } from 'react';

// function Footer() {
//   const [quoteIndex, setQuoteIndex] = useState(0);
//   const quotes = [
//     "Food is not just fuel, it's information. It talks to your DNA and tells it what to do",
//     "Let food be thy medicine and medicine be thy food",
//     "Eating healthy food fills your body with energy and nutrients",
//     "The only time to eat diet food is while you're waiting for the steak to cook.",
//     "Food is symbolic of love when words are inadequate.",
//     "There is no sincerer love than the love of food." ,
//     "Food is not just eating energy. It's an experience.",
//     "One cannot think well, love well, sleep well, if one has not dined well.",
//     "All happiness depends on a leisurely breakfast.",
//     "Eating is a necessity, but cooking is an art.",
//     "Good food is good mood.",
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
//     }, 10000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <h1
//       style={{
//         padding: '25px',
//         whiteSpace: 'nowrap',
//         fontSize: '25px',
//         backgroundColor: 'red',
//         color: 'white',
//         textAlign: 'center',
//         borderRadius: '25px',
//         display: 'inline-block'
//       }}
//     >
//       {quotes[quoteIndex]}
//     </h1>
//   );
// }

// export default Footer;

import { useState, useEffect } from 'react';

function Footer() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [    "Food is not just fuel, it's information. It talks to your DNA and tells it what to do",    "Let food be thy medicine and medicine be thy food",    "Eating healthy food fills your body with energy and nutrients",    "The only time to eat diet food is while you're waiting for the steak to cook.",    "Food is symbolic of love when words are inadequate.",    "There is no sincerer love than the love of food." ,    "Food is not just eating energy. It's an experience.",    "One cannot think well, love well, sleep well, if one has not dined well.",    "All happiness depends on a leisurely breakfast.",    "Eating is a necessity, but cooking is an art.",    "Good food is good mood.",  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        padding: '25px',
        borderRadius: '60px',
        overflow: 'hidden',
        backgroundColor: 'red',
      }}
    >
      <h1
        style={{
          whiteSpace: 'nowrap',
          fontSize: '25px',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {quotes[quoteIndex]}
      </h1>
    </div>
  );
}

export default Footer;



