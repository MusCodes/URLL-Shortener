import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5052/api/Sample')
    .then(response => {
        console.log("this is response", response.status);
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(`This is the error`,error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
