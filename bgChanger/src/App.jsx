import { useState } from 'react';
import './App.css';

function App() {
  // State to track the current background color
  const [color, setColor] = useState('olive');

  return (
    // Apply the selected color as the background
    <div className="main" style={{ backgroundColor: color }}>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('orange')}>Orange</button>
      <button onClick={() => setColor('yellow')}>Yellow</button>
      <button onClick={() => setColor('black')}>Black</button>
    </div>
  );
}

export default App; 