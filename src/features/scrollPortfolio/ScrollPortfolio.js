import React from 'react';
import portfolio1Image from '../../assets/portfolio1.jpeg';
import { useSelector } from 'react-redux';

export function ScrollPortfolio() {

    const scrollLeft = useSelector(state => state.scrollPortfolio.scrollPortfolioScrollLeft);

    return (
        <div className='scroll-portfolio-section' style={{
            transform: `translateX(-${scrollLeft/3}px)`
        }}>
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
        </div>
    );

}