import React from 'react';
import TravelBook from './Components/TravelBook';
import Data from './Components/TravelData';
import Navbar from './Components/Navbar';

function App() {
  const TravelLocations = Data.map(item => (
    <div className='card' key={item.id}>
      <TravelBook
        title={item.title}
        location={item.location}
        googleMap={item.googleMap}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        image={item.image}
      />
    </div>
  ));

  return (
    <div>
      <Navbar/>
      {TravelLocations} {/* Rendering an array of TravelBook components */}
    </div>
  );
}

export default App;
