import React from 'react';
import { Button } from 'react-bootstrap';

export default function Parade() {
  return (
    <div className='parade-container'>
      <h5>Add to the Animal Parade</h5>
      <div className='parade-buttons'>
        <Button variant='outline-secondary'>🦏</Button>
        <Button variant='outline-secondary'>🦍</Button>
        <Button variant='outline-secondary'>🐆</Button>
        <Button variant='outline-secondary'>🦓</Button>
        <Button variant='outline-secondary'>🐘</Button>
        <Button variant='outline-secondary'>🦛</Button>
        <Button variant='outline-secondary'>🐅</Button>
        <Button variant='outline-secondary'>🦒</Button>
      </div>
      <div className='parade'>

      </div>
    </div>
  );
}
