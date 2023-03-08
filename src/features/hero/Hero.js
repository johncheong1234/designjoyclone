import React from 'react';
// import as reactComponent
import headerImage from '../../assets/headerImage.svg';
import leftHeroImage from '../../assets/left-hero.svg';
import rightHeroImage from '../../assets/right-hero.svg';
import heartIcon from '../../assets/heartIcon.svg';

export function Hero() {

    function scrambleText(e) {
        const text = e.target.innerText;
        const originalText = e.target.getAttribute('data-original-text');
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        let iterations = 0;
        const interval = setInterval(() => {
            let scrambledText = '';
            for (let i = 0; i < text.length; i++) {
                if (text[i] === ' ') {
                    scrambledText += ' ';
                    continue;
                }

                if (i < iterations) {
                    scrambledText += text[i];
                    continue;
                }
                scrambledText += letters[Math.floor(Math.random() * letters.length)];
            }
            e.target.innerText = scrambledText;
            if (iterations >= text.length) {
                clearInterval(interval);
                e.target.innerText = originalText;
            }
            iterations += 1 / 3;

        }, 20);
    }

    return (
        <div className='hero-section'>
            <div style={{
                position: 'absolute',
                marginTop: '114px'
            }}

                className='left-hero-image-container'
            >
                <img src={leftHeroImage} alt="left-hero" width={'200px'} height={'342px'} />
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
                <div className='hero-section-header' onMouseOver={
                    scrambleText
                }
                    data-original-text='A design agency with a twist'
                >A design agency with a twist
                </div>
                <div className='hero-section-subheader'>
                    Design subscriptions to scale your business.
                </div>

                <div className='see-plans-button'>
                    See plans
                </div>

                <div className='guarantee-text'>
                    <span>Designs you'll </span>
                    <div style={{
                        display: 'inline-block',
                    }}>
                        <img src={heartIcon} alt="heart" />
                    </div>
                    <span>, guaranteed</span>
                </div>
            </div>

        </div>
    );
}


