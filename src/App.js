import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [input, setInput]= useState('https://www.google.com/search?q=aldka%3Blkd%3Balkda%3Bs&sca_esv=564603026&sxsrf=AB5stBjaXNpw-M1ZycWEp5y_In5x3ZgMGw%3A1694500609091&source=hp&ei=AQcAZY_SAoynptQP3vmRkAs&iflsig=AD69kcEAAAAAZQAVEZbfC2IbteoNdObIbCWGgLNejVQm&ved=0ahUKEwjP1v7WuqSBAxWMk4kEHd58BLIQ4dUDCAs&uact=5&oq=aldka%3Blkd%3Balkda%3Bs&gs_lp=Egdnd3Mtd2l6GgIYAiIRYWxka2E7bGtkO2Fsa2RhO3MyBxAhGKABGAoyBxAhGKABGAoyBxAhGKABGAoyBRAhGKsCMgUQIRirAjIFECEYqwJIng1QAFiuCHAAeACQAQCYAa0BoAG_D6oBBDMuMTS4AQPIAQD4AQHCAgcQIxiKBRgnwgIEECMYJ8ICBxAAGIoFGEPCAhEQLhiABBixAxiDARjHARjRA8ICCBAAGIoFGJECwgILEC4YigUYsQMYgwHCAhMQLhiKBRixAxiDARjHARjRAxhDwgIOEC4YgAQYsQMYxwEY0QPCAhAQLhiKBRixAxjHARjRAxhDwgIFEAAYgATCAgsQLhiABBjHARivAcICChAAGIoFGLEDGEPCAhAQLhjHARixAxjRAxiKBRhDwgIIEAAYgAQYsQPCAgsQLhivARjHARiABMICEBAuGIAEGLEDGMcBGNEDGArCAgcQABiABBgKwgINEC4YgAQYxwEY0QMYCsICDRAuGIAEGMcBGK8BGArCAgoQABiABBixAxgKwgIPEC4YHhjxBBjHARjRAxgKwgIGEAAYHhgKwgIJEAAYHhjxBBgKwgILEAAYBRgeGPEEGArCAgcQABgNGIAEwgITEAAYDRiABBixAxixAxiLAxjuBMICExAuGA0YgAQYsQMYgwEYsQMYgwHCAg0QABgNGIAEGLEDGIMBwgIIEAAYBRgeGA3CAggQABgIGB4YDcICDRAuGAgYHhgNGPEEGArCAggQABiKBRiGA8ICBxAuGA0YgATCAg0QLhgNGIAEGMcBGK8BwgIGEAAYHhgNwgIIEC4YCBgeGA0&sclient=gws-wiz&bshm=rime/1')

 const handleSubmit= () => {
 axios({
    method: 'get',
    url: `http://localhost:5052/api/shortURL`,
    params: {longURL: input}
   }).then(function (response){
    console.log(" this is response .data", response);
   }).catch((error) => {
    console.log(" this is catch error", error);
   })
  };
 
  

  return (
    <div className="App">
      <button onClick={handleSubmit}>   get url</button>
    </div>
  );}


export default App;
