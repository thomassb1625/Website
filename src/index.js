import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Projects from './pages';
import Resume from './pages';
import Contact from './pages';
import ReadingList from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="pl-2 text-3xl font-bold underline">
      Thomas Baker
    </h1>
    <h1 className="pl-2 text-l">
      love any and all engineering (except frontend🤢)
    </h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Projects/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/books' element={<ReadingList/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
