import React, { useState } from 'react';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setClickCount(clickCount + 1);
  };

  return (
    <div className={clickCount % 2 === 0 ? 'App even' : 'App odd'}>
      <button 
        className={isClicked ? 'clicked' : 'unclicked'} 
        onClick={handleClick}
      >
        Click me!
      </button>
    </div>
  );
}

export default App;

