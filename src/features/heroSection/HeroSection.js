import React from 'react';
import DesignAceLogo from '../../assets/DesignAceLogo.svg';


export function HeroSection() {
    return (
        <div className='new-hero-section'>
            <div className='hero-section-image-container'>
                <img src={DesignAceLogo} alt="header" className='hero-section-image' width={'275px'} height={'72px'}/>
            </div>
            <div className='hero-section-supercharge'>
                <div className='hero-section-supercharge-top-line'>Supercharge your business</div>
                <div className='hero-section-supercharge-bottom-line'>through design</div>
            </div>
        </div>
    )
}