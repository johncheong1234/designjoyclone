import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Hero } from './features/hero/Hero';
import { ScrollPortfolio } from './features/scrollPortfolio/ScrollPortfolio';

function App() {

  function handleScroll() {

    const appContainer = document.getElementById('app-container');
    const scrollAppContainer = appContainer.scrollTop;

    // get height of app container
    const appContainerHeight = appContainer.offsetHeight;
    console.log('scrolling');
    console.log(scrollAppContainer);
    console.log(appContainerHeight);
  }

  return (
    <div onScroll={handleScroll} style={{
      overflowY: 'scroll',
      position: 'relative',
      height: '100vh'
    }}
      id='app-container'
    >
      <Hero />
      <ScrollPortfolio />
    </div>
  );
}

export default App;
