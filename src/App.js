import React from 'react';
import PhoneBook from './components/PhoneBook';

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "steelblue",
          color: "white",
          marginBottom: 16
        }}
      >
        <h1
          style={{
            margin: "auto",
            width: "fit-content",
            height: 100,
            display: "flex",
            alignItems: "center"
          }}
        >
          HELLO REACT RENDER
        </h1>
      </div>
      <PhoneBook />
    </div>
  );
}

export default App;
