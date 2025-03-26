import React from 'react';
import AnimalCard from './components/AnimalCard';

const animalData = [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    size: 140,
    diet: ['meat'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1024px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
    imageStyle: { objectFit: 'cover', width: '100%', height: '300px' },
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gorilla_%283830692663%29.jpg/576px-Gorilla_%283830692663%29.jpg',
    imageStyle: { objectFit: 'cover', width: '100%', height: '300px' },
    additional: {
      notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.',
    },
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Plains_Zebra_Equus_quagga.jpg/399px-Plains_Zebra_Equus_quagga.jpg',
    imageStyle: { objectFit: 'cover', width: '100%', height: '300px' },
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra',
    },
  },
];

// Function to show additional data as alert
const showAdditionalData = (additional) => {
  const data = Object.entries(additional || {}).map(([key, value]) => `${key}: ${value}`).join('\n');
  alert(data || 'No additional information available');
};

export default function App() {
  return (
    <div className="app-container">
      <h1 className="title">Animal Information</h1>
      <div className="card-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {animalData.map((animal) => (
          <AnimalCard key={animal.name} {...animal} showAdditional={showAdditionalData} />
        ))}
      </div>
    </div>
  );
}