import React, { useState } from 'react';
import OpenSign from './OpenSign';
import Fight from './Fight';
import Parade from './Parade';

export default function ZooPage() {
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [animals, setAnimals] = useState([]);
  return (
    <div className="App">
      <header>
        <a href="/">Home</a>
        <h2>Welcome to the Busy Zoo</h2>
        <a href="/admin">Admin</a>
      </header>
      <main>
        <Fight
          unicornSize={unicornSize}
          lionSize={lionSize}
          setUnicornSize={setUnicornSize}
          setLionSize={setLionSize}
        />
        <OpenSign isOpen={isOpen} setIsOpen={setIsOpen} />
        <Parade animals={animals} setAnimals={setAnimals} />
      </main>
      <footer>
        <p>
          The Busy Zoo is not responsible for any injuries resulting from our animal parade or
          unicorn/lion fights
        </p>
      </footer>
    </div>
  );
}
