import React from 'react';
import portfolio1Image from '../../assets/portfolio1.jpeg';
import portfolio2Image from '../../assets/portfolio2.jpeg';
import portfolio3Image from '../../assets/portfolio3.jpeg';
import portfolio4Image from '../../assets/portfolio4.jpeg';
import portfolio5Image from '../../assets/portfolio5.jpeg';
import latestProjects from '../../assets/latestProjects.svg';
import { useSelector } from 'react-redux';

export function ScrollPortfolio() {

    const scrollLeft = useSelector(state => state.scrollPortfolio.scrollPortfolioScrollLeft);

    return (
        <div className='scroll-portfolio-section-container'>
            <img src={latestProjects} alt="latest-projects" className='latest-projects-image'
            style = {{
                // rotation 
                transform: `rotate(-${scrollLeft/10}deg)`,
            }}
            />
            <div className='scroll-portfolio-section' style={{
                transform: `translateX(-${scrollLeft / 3}px)`
            }}>

                <img src={portfolio1Image} alt="portfolio1" className='scroll-portfolio-image' />
                <img src={portfolio2Image} alt="portfolio1" className='scroll-portfolio-image' />
                <img src={portfolio3Image} alt="portfolio1" className='scroll-portfolio-image' />
                <img src={portfolio4Image} alt="portfolio1" className='scroll-portfolio-image' />
                <img src={portfolio5Image} alt="portfolio1" className='scroll-portfolio-image' />
            </div>
        </div>
    );

}