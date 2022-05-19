import React from 'react';
import CustomButton from './CustomButton';

export default function OpenSign({ isOpen, setIsOpen }) {
  return (
    <div className="open-sign-container">
      <div className="open-sign">
        {isOpen ? <img alt="open" src="/open.png" /> : <img alt="closed" src="/closed.png" />}
      </div>
      {isOpen ? (
        <div className="open-buttons">
          <CustomButton variant={'contained'} color={'success'} text={'Open'} disabled={true} />
          <CustomButton
            variant={'contained'}
            color="error"
            text={'Close'}
            onClick={() => setIsOpen(false)}
          />
        </div>
      ) : (
        <div className="open-buttons">
          <CustomButton
            variant={'contained'}
            color={'success'}
            text={'Open'}
            onClick={() => setIsOpen(true)}
          />
          <CustomButton variant={'contained'} color="error" text={'Close'} disabled={true} />
        </div>
      )}
    </div>
  );
}
