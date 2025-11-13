import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useState } from "react";

function App() {
  const [fruits] = useState(["Apple", "Banana", "Mango", "Orange"]);

  const handleClick = (fruit) => {
    alert(fruit);
  };

  return (
    <div>
      <h1>Fruit Shop</h1>
      {fruits.map((fruit, index) => (
        <p key={index} onClick={() => handleClick(fruit)}>
          {fruit}
        </p>
      ))}
    </div>
  );
}

export default App

