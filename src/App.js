import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import OpenSign from './components/OpenSign';
import { Button } from 'react-bootstrap';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Zoo</h1>
      </header>
      <main>
        <div className='open-sign-container'>
          <OpenSign isOpen={isOpen} />
          {isOpen ? 
            <div className='open-buttons'>
              <Button variant="success" disabled>Open</Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>Close</Button>
            </div>
            :
            <div className='open-buttons'>
              <Button variant="success" onClick={() => setIsOpen(true)}>Open</Button>
              <Button variant="danger" disabled>Close</Button>
            </div>
          }
        </div>
      </main>
      <footer>
        <h3>This is the footer</h3>
      </footer>
    </div>
  );
}

export default App;
