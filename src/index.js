import React from 'react';
import ReactDOM from 'react-dom/client';
import Generalinfo from './App';
import Educationalexperience from './components/Educationalexperience';
import Practicalexperience from './components/practicalE';
// import Cv from './cv';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Generalinfo/>
    <Educationalexperience/>
    <Practicalexperience/>
    {/* <Cv/> */}
  </React.StrictMode>
);


