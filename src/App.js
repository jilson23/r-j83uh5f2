import React, { Component, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)
  const handleChange = ({target} ) => {
    setCount(target.value.length)
  }



  return (
    <div className="container">
      <textarea rows="3" onChange={handleChange}></textarea>
      <div className="counter">{count}</div>
    </div>
  );


}

export default App;
