import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [input, setInput]= useState('')

 const handleSubmit= () => {
 axios({
    method: 'get',
    url: `http://localhost:5052/api/shortnerURL/shortenURL`,
    params: {longURL: input}
   }).then(function (response){
    setMessage(response.data)
   }).catch((error) => {
    console.log(" this is catch error", error);
   })
  };
 
  

  return (
    <div className="UrlShortner">
      <input value={input} onChange={(event) => setInput(event.target.value)} type='text' placeholder='longURL'></input>
      <button onClick={handleSubmit}>   get url</button>
      <h2>{message}</h2>
    </div>
  );}


export default App;
