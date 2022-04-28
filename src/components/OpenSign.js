import React from 'react';

export default function OpenSign({ isOpen }) {
  return (
    <div className='open-sign'>
      {isOpen ? 
        <img alt='open' src='/open.png' />
        :
        <img alt='closed' src='/closed.png' />
      }
    </div>
  );
}
