import React from 'react';
import ReactDOM from 'react-dom/client';
import Generalinfo from './App';
import Educationalexperience from './components/Educationalexperience';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Generalinfo/>
    <Educationalexperience/>
  </React.StrictMode>
);


