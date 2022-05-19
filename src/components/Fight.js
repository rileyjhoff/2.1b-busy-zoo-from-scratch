import React from 'react';
import CustomButton from './CustomButton';

export default function Fight({ unicornSize, lionSize, setUnicornSize, setLionSize }) {
  return (
    <div className="fight-container">
      <div className="unicorn fighter">
        <img alt="unicorn" src="unicorn.png" width={unicornSize * 10} />
        {unicornSize < 20 ? (
          <CustomButton
            variant={'contained'}
            text={'Power Up'}
            onClick={() => setUnicornSize(unicornSize + 1)}
          />
        ) : (
          <CustomButton variant={'contained'} text={'Power Up'} disabled={true} />
        )}
        {lionSize > 5 ? (
          <CustomButton
            variant={'contained'}
            text={'Attack Lion'}
            color={'secondary'}
            onClick={() => setLionSize(lionSize - 1)}
          />
        ) : (
          <CustomButton
            variant={'contained'}
            text={'Attack Lion'}
            color={'secondary'}
            disabled={true}
          />
        )}
      </div>
      <div className="lion fighter">
        <img alt="unicorn" src="lion.png" width={lionSize * 10} />
        {lionSize < 20 ? (
          <CustomButton
            variant={'contained'}
            text={'Power Up'}
            onClick={() => setLionSize(lionSize + 1)}
          />
        ) : (
          <CustomButton variant={'contained'} text={'Power Up'} disabled={true} />
        )}
        {unicornSize > 5 ? (
          <CustomButton
            variant={'contained'}
            color={'secondary'}
            text={'Attack Unicorn'}
            onClick={() => setUnicornSize(unicornSize - 1)}
          />
        ) : (
          <CustomButton
            variant={'contained'}
            color={'secondary'}
            disabled={true}
            text={'Attack Unicorn'}
          />
        )}
      </div>
    </div>
  );
}
