import React from 'react';
import { Button } from 'react-bootstrap';

export default function Fight() {
  return (
    <div className='fight-container'>
      <div className='unicorn fighter'>
        <img alt='unicorn' src='unicorn.png' />
        <Button >Power Up</Button>
        <Button >Attack Lion</Button>
      </div>
      <div className='lion fighter'>
        <img alt='unicorn' src='lion.png' />
        <Button variant='outline-success'>Power Up</Button>
        <Button variant='outline-danger'>Attack Unicorn</Button>
      </div>
    </div>
  );
}
