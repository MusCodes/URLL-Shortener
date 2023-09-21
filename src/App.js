import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  function copyToClipBoard() {
    const copyText = document.getElementById("shortURL");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied text to clipBoard" + copyText.value);
  }

  const handleSubmit = () => {
    axios({
      method: "get",
      url: `http://localhost:5052/api/shortnerURL/shortenURL`,
      params: { longURL: input },
    })
      .then(function (response) {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(" this is catch error", error);
      });
  };

  return (
    <div className="main-box">
      <div className="input-box">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="longURL"
          required
        ></input>
      </div>

      <button onClick={handleSubmit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        get url
      </button>

      <div className="input-box">
        <a href={message} target="_blank" rel="noopener noreferrer">
          <h2 id="shortURL">{message}</h2>
          <button onClick={copyToClipBoard}>COPY</button>
        </a>
      </div>
    </div>
  );
}

export default App;
