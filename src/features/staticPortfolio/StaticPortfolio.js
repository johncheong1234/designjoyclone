import React from 'react';
import staticPortfolioImage1 from '../../assets/staticPortfolioImage1.png';
import staticPortfolioImage2 from '../../assets/staticPortfolioImage2.png';
import staticPortfolioImage3 from '../../assets/staticPortfolioImage3.png';
import staticPortfolioImage4 from '../../assets/staticPortfolioImage4.png';

export function StaticPortfolio() {
    return (
        <div className='static-portfolio-section'>
            <div 
            style = {{
                display: 'flex',
                flexDirection: 'column',
            }}
            >
                <img src={staticPortfolioImage1} width={'100%'}/>
                <img src={staticPortfolioImage2} width={'100%'}/>
            </div>
            <div
            style={{
                width: '10%'
            }}
            >

            </div>
            <div
            style = {{
                display: 'flex',
                flexDirection: 'column',
            }}
            >
                <img src={staticPortfolioImage3} width={'100%'}/>
                <img src={staticPortfolioImage4} width={'100%'}/>
            </div>
        </div>
    )
}