import './App.css';
import React, { useState, useEffect, useRef } from 'react';
function App() {
  const [time, setTime] = useState(new Date().toLocaleString());
  const unSetRef = useRef(null);

  useEffect(() => {
    unSetRef.current = setInterval(() => {
      setTime(() => new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(unSetRef.current);
      console.log('clear');
    };
  }, []);

  useEffect(() => console.log('Component Update'));

  return (
    <div className='App'>
      <p>{time}</p>
      <button
        onClick={() => {
          clearInterval(unSetRef.current);
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
