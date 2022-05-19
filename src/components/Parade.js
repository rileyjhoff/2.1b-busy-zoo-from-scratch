import Button from '@mui/material/Button';
import React from 'react';
import Emoji from './Emoji';

export default function Parade({ animals, setAnimals }) {
  return (
    <div className="parade-container">
      <h5>Add to the Animal Parade</h5>
      <div className="parade-buttons">
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('rhino');
            setAnimals([...animals]);
          }}
        >
          🦏
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('gorilla');
            setAnimals([...animals]);
          }}
        >
          🦍
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('cheetah');
            setAnimals([...animals]);
          }}
        >
          🐆
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('zebra');
            setAnimals([...animals]);
          }}
        >
          🦓
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('elephant');
            setAnimals([...animals]);
          }}
        >
          🐘
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('hippo');
            setAnimals([...animals]);
          }}
        >
          🦛
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('tiger');
            setAnimals([...animals]);
          }}
        >
          🐅
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            animals.push('giraffe');
            setAnimals([...animals]);
          }}
        >
          🦒
        </Button>
      </div>
      <div className="parade">
        <span>🚂</span>
        {animals.map((animal, i) => (
          <Emoji key={animal + i} animal={animal} />
        ))}
      </div>
    </div>
  );
}
