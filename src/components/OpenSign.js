import React from 'react';
import { Button } from 'react-bootstrap';

export default function OpenSign({ isOpen, setIsOpen }) {
  return (
    <div className='open-sign-container'>
      <div className='open-sign'>
        {isOpen ? 
          <img alt='open' src='/open.png' />
          :
          <img alt='closed' src='/closed.png' />
        }
      </div>
      {isOpen ? 
        <div className='open-buttons'>
          <Button variant="success" disabled>Open</Button>
          <Button variant="danger" onClick={() => setIsOpen(false)}>Close</Button>
        </div>
        :
        <div className='open-buttons'>
          <Button variant="success" onClick={() => setIsOpen(true)}>Open</Button>
          <Button variant="danger" disabled>Close</Button>
        </div>
      }
    </div>
  );
}
