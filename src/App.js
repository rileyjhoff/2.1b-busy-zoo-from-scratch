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
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Zoo</h1>
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
        <Parade />
      </main>
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </div>
  );
}

export default App;
