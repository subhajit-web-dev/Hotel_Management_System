import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import Login from './login';
import Home from './home';
import ExploreKolkata from './explorekolkata'; 
import ExploreMumbai from './exploremumbai';
import ExploreChennai from './explorechennai';
import ExploreDelhi from './exploredelhi';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explorekolkata" element={<ExploreKolkata />} />
        <Route path="/exploremumbai" element={<ExploreMumbai />} />
        <Route path="/explorechennai" element={<ExploreChennai />} />
        <Route path="/exploredelhi" element={<ExploreDelhi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
