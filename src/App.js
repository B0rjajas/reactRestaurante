import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h1 className='font-sans'>Puto subnormal de los cuyons</h1>;
}

function About() {
  return <h1 className='font-sans'>Acerca de</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
