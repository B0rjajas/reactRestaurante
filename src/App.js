import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ordenes  from './components/Ordenes';
import Menu from './components/Menu';
import Nuevoplatillo from './components/Nuevoplatillo';
import Sidebar from './ui/Sidebar';


import { FirebaseContext } from './firebase/firebase';

function Home() {
  return <h1 className='font-sans'>Puto subnormal de los cuyons</h1>;
}

function About() {
  return <h1 className='font-sans'>Acerca de</h1>;
}

function App() {
  return (

  <>
  <FirebaseContext.Provider 
    value= {{
      firebase
    }}
  />

    <div className='md:flex min-h-screen'>
    <Sidebar />
    <div className='md:w-3/5 xl:w-4/5'>
      <Routes>
          <Route path="/ordenes" element= {<Ordenes />} />
          <Route path="/menu" element= {<Menu />} />
          <Route path="/nuevoplatillo" element= {<Nuevoplatillo />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
