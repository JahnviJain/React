import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function Chai(){
  return(
    <h1>hey</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Chai />
  </React.StrictMode>
);

