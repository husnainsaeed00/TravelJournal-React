import React from 'react';

const TravelBook = ({ title, location, googleMap, startDate, endDate, description, image }) => {
  return (
    <div className="travel-book">
      <img src={image} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>Location: {location}</p>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
        <p>{description}</p>
        <a href={googleMap} target="_blank" rel="noopener noreferrer">Google Map</a>
      </div>
    </div>
  );
};

export default TravelBook;
