import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Generalinfo from './App';
import Educationalexperience from './components/Educationalexperience';
import Practicalexperience from './components/practicalE';
// import Cv from './cv';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Generalinfo/>
    <Educationalexperience/>
    <Practicalexperience/>
    {/* <Cv/> */}
    </HashRouter>
  </React.StrictMode>
);


