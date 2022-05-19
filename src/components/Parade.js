import React from 'react';
import Emoji from './Emoji';
import CustomButton from './CustomButton';

export default function Parade({ animals, setAnimals }) {
  return (
    <div className="parade-container">
      <h5>Add to the Animal Parade</h5>
      <div className="parade-buttons">
        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('rhino');
            setAnimals([...animals]);
          }}
          text={'🦏'}
        />

        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('gorilla');
            setAnimals([...animals]);
          }}
          text={'🦍'}
        />

        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('cheetah');
            setAnimals([...animals]);
          }}
          text={'🐆'}
        />

        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('zebra');
            setAnimals([...animals]);
          }}
          text={'🦓'}
        />

        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('elephant');
            setAnimals([...animals]);
          }}
          text={'🐘'}
        />

        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('hippo');
            setAnimals([...animals]);
          }}
          text={'🦛'}
        />

        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('tiger');
            setAnimals([...animals]);
          }}
          text={'🐅'}
        />

        <CustomButton
          size={'small'}
          variant={'outlined'}
          onClick={() => {
            animals.push('giraffe');
            setAnimals([...animals]);
          }}
          text={'🦒'}
        />
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
