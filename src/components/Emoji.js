import React from 'react';

export default function Emoji({ animal }) {
  return (
    <>
      {animal === 'rhino' && <span>🦏</span>}
      {animal === 'gorilla' && <span>🦍</span>}
      {animal === 'cheetah' && <span>🐆</span>}
      {animal === 'zebra' && <span>🦓</span>}
      {animal === 'elephant' && <span>🐘</span>}
      {animal === 'hippo' && <span>🦛</span>}
      {animal === 'tiger' && <span>🐅</span>}
      {animal === 'giraffe' && <span>🦒</span>}
    </>
  );
}
