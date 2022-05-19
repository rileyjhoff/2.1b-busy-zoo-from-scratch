import React from 'react';
import Button from '@mui/material/Button';

export default function OpenSign({ isOpen, setIsOpen }) {
  return (
    <div className="open-sign-container">
      <div className="open-sign">
        {isOpen ? <img alt="open" src="/open.png" /> : <img alt="closed" src="/closed.png" />}
      </div>
      {isOpen ? (
        <div className="open-buttons">
          <Button variant="contained" color="success" disabled>
            Open
          </Button>
          <Button variant="contained" color="error" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      ) : (
        <div className="open-buttons">
          <Button variant="contained" color="success" onClick={() => setIsOpen(true)}>
            Open
          </Button>
          <Button variant="contained" color="error" disabled>
            Close
          </Button>
        </div>
      )}
    </div>
  );
}
