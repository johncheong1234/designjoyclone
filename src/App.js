import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Hero } from './features/hero/Hero';

function App() {

  function handleScroll() {
    console.log('scrolling');
  }

  return (
    <div onScroll = {handleScroll} style={{
      overflowY: 'scroll',
      position: 'relative',
      height:'100vh'
    }}>
      <Hero />
    </div>
  );
}

export default App;
