import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import OpenSign from './components/OpenSign';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Zoo</h1>
      </header>
      <main>
        <OpenSign isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </div>
  );
}

export default App;
