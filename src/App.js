import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Hero } from './features/hero/Hero';
import { ScrollPortfolio } from './features/scrollPortfolio/ScrollPortfolio';
import { setPortfolioScrollLeft } from './features/scrollPortfolio/scrollPortfolioSlice';
import { BrandScroller } from './features/brandScroller/BrandScroller';
import { Usps } from './features/usps/Usps';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  function handleScroll() {
    const appContainer = document.getElementById('app-container');
    const scrollAppContainer = appContainer.scrollTop;

    // get height of app container
    // const appContainerHeight = appContainer.offsetHeight;
    // console.log('scrolling');
    // console.log(scrollAppContainer);
    // console.log(appContainerHeight);
    dispatch(setPortfolioScrollLeft({ scrollLeft: scrollAppContainer }));
  }

  function handlePointerMove(e){
    console.log(e);
  }

  return (
    <div onScroll={handleScroll}
    onPointerMove={handlePointerMove}
    style={{
      overflowY: 'scroll',
      overflowX: 'hidden',
      position: 'relative',
      height: '100vh'
    }}
      id='app-container'
    >
      <Hero />
      <ScrollPortfolio />
      <BrandScroller />
      <Usps />
    </div>
  );
}

export default App;
