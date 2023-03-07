import React from 'react';
import brand1 from '../../assets/brand1.svg';

export function BrandScroller() {
    return (
        <div className='brand-scroller-container'>
            <div className='brand-scroller'>
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
            </div>
            <div className='brand-scroller' style = {{
                marginLeft: '100%'
            }}>
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
            </div>
        </div>
    )
}