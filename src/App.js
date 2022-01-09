import './App.css';
import FirstPart from './components/first-part';
import About from './components/about-me';
import Portfolio from './components/portfolio';
import Header from './components/header';
import React from 'react';

function App() {

  return (
    <section className='main-section'>
      <FirstPart />
      <About />
      <Portfolio />      
      <Header/>
    </section>
  );
}

export default App;