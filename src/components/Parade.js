import React from 'react';
import { Button } from 'react-bootstrap';
import Emoji from './Emoji';

export default function Parade({ animals, setAnimals }) {
  return (
    <div className='parade-container'>
      <h5>Add to the Animal Parade</h5>
      <div className='parade-buttons'>
        <Button 
          variant='outline-secondary' 
          onClick={() => {animals.push('rhino'); setAnimals([...animals]);}}
        >🦏</Button>
        <Button 
          variant='outline-secondary'
          onClick={() => {animals.push('gorilla'); setAnimals([...animals]);}}
        >🦍</Button>
        <Button variant='outline-secondary'
          onClick={() => {animals.push('cheetah'); setAnimals([...animals]);}}
        >🐆</Button>
        <Button variant='outline-secondary'
          onClick={() => {animals.push('zebra'); setAnimals([...animals]);}}
        >🦓</Button>
        <Button variant='outline-secondary'
          onClick={() => {animals.push('elephant'); setAnimals([...animals]);}}
        >🐘</Button>
        <Button variant='outline-secondary'
          onClick={() => {animals.push('hippo'); setAnimals([...animals]);}}
        >🦛</Button>
        <Button variant='outline-secondary'
          onClick={() => {animals.push('tiger'); setAnimals([...animals]);}}
        >🐅</Button>
        <Button variant='outline-secondary'
          onClick={() => {animals.push('giraffe'); setAnimals([...animals]);}}
        >🦒</Button>
      </div>
      <div className='parade'>
        <span>🚂</span>
        {animals.map((animal, i) => 
          <Emoji 
            key={animal + i} 
            animal={animal}
          />
        )}
      </div>
    </div>
  );
}
