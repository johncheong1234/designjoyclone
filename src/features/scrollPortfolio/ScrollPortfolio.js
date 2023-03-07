import React from 'react';
import portfolio1Image from '../../assets/portfolio1.jpeg';

export function ScrollPortfolio() {

    return (
        <div className='scroll-portfolio-section'>
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
            <img src = {portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
        </div>
    );

}