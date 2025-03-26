import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
  image,
}) {
  return (
    <div className="animal-card">
      <img src={image} alt={name} className="animal-image" />
      <h2>{name}</h2>
      <p><em>{scientificName}</em></p>
      <p>Size: {size} kg</p>
      <p>Diet: {diet.join(', ')}</p>
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
}

// PropTypes validation
AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    notes: PropTypes.string,
    link: PropTypes.string,
  }),
  showAdditional: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired, // Kiểm tra image là chuỗi
};
