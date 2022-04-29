import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import OpenSign from './components/OpenSign';
import Fight from './components/Fight';
import Parade from './components/Parade';

function App() {
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [animals, setAnimals] = useState([]);
  return (
    <div className="App">
      <header>
        <h2>Welcome to the Busy Zoo</h2>
      </header>
      <main>
        <Fight 
          unicornSize={unicornSize} 
          lionSize={lionSize} 
          setUnicornSize={setUnicornSize}
          setLionSize={setLionSize} 
        />
        <OpenSign 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />
        <Parade 
          animals={animals}
          setAnimals={setAnimals}
        />
      </main>
      <footer>
        <p>The Busy Zoo is not responsible for any injuries resulting from our animal parade or unicorn/lion fights</p>
      </footer>
    </div>
  );
}

export default App;
