import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ReadingList from './pages/ReadingList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="pl-2 text-3xl font-bold underline">
      Thomas Baker
    </h1>
    <h1 className="pl-2 text-l">
      big stem guy 🧮 🚀 🤖
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
