import React from 'react';
// import as reactComponent
import headerImage from '../../assets/headerImage.svg';

export function Hero() {
    return (
        <div className='hero-section'>
            <div className='hero-section-image-container'>
                <img src={headerImage} alt="header" className='hero-section-image' />
            </div>
            <div className='hero-section-text-container'>
                <div className='hero-section-header'>A design agency with a twist
                </div>
                <div className='hero-section-subheader'>
                    Design subscriptions to scale your business.
                </div>

                <div className='see-plans-button'>
                    See plans
                </div>  
            </div>
        </div>
    );
}


