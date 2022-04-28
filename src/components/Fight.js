import React from 'react';
import { Button } from 'react-bootstrap';

export default function Fight() {
  return (
    <div className='fight-container'>
      <div className='unicorn fighter'>
        <img alt='unicorn' src='unicorn.png' />
        <Button variant='info'>Power Up</Button>
        <Button variant='warning'>Attack Lion</Button>
      </div>
      <div className='lion fighter'>
        <img alt='unicorn' src='lion.png' />
        <Button variant='info'>Power Up</Button>
        <Button variant='warning'>Attack Unicorn</Button>
      </div>
    </div>
  );
}
