import React from 'react';
import Button from '@mui/material/Button';

export default function Fight({ unicornSize, lionSize, setUnicornSize, setLionSize }) {
  return (
    <div className="fight-container">
      <div className="unicorn fighter">
        <img alt="unicorn" src="unicorn.png" width={unicornSize * 10} />
        {unicornSize < 20 ? (
          <Button variant="contained" onClick={() => setUnicornSize(unicornSize + 1)}>
            Power Up
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Power Up
          </Button>
        )}
        {lionSize > 5 ? (
          <Button variant="contained" color="secondary" onClick={() => setLionSize(lionSize - 1)}>
            Attack Lion
          </Button>
        ) : (
          <Button variant="contained" color="secondary" disabled>
            Attack Lion
          </Button>
        )}
      </div>
      <div className="lion fighter">
        <img alt="unicorn" src="lion.png" width={lionSize * 10} />
        {lionSize < 20 ? (
          <Button variant="contained" onClick={() => setLionSize(lionSize + 1)}>
            Power Up
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Power Up
          </Button>
        )}
        {unicornSize > 5 ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setUnicornSize(unicornSize - 1)}
          >
            Attack Unicorn
          </Button>
        ) : (
          <Button variant="contained" color="secondary" disabled>
            Attack Unicorn
          </Button>
        )}
      </div>
    </div>
  );
}
