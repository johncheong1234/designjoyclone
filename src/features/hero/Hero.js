import React from 'react';
// import as reactComponent
import headerImage from '../../assets/headerImage.svg';
import leftHeroImage from '../../assets/left-hero.svg';
import rightHeroImage from '../../assets/right-hero.svg';

export function Hero() {
    return (
        <div className='hero-section'>
            <div style={{
                position: 'absolute',
                marginTop: '114px'
            }}

                className='left-hero-image-container'
            >
                <img src={leftHeroImage} alt="left-hero" width={'171px'} height={'342px'} />
            </div>
            <div style={{
                position: 'absolute',
                right: 0,
                marginTop: '91px'
            }}
                className='right-hero-image-container'
            >
                <img src={rightHeroImage} alt="left-hero" width={'171px'} height={'308px'} />
            </div>
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


