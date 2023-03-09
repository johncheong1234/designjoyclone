import React from 'react';
import brand1 from '../../assets/brand1.svg';
import brand2 from '../../assets/brand2.svg';
import brand3 from '../../assets/brand3.svg';
import brand4 from '../../assets/brand4.svg';
import brand5 from '../../assets/brand5.svg';

export function BrandScroller() {
    return (
        <div className='brand-scroller-container'>
            <div className='brand-scroller'>
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand2} alt='brand2' className='brand-scroller-image' />
                <img src={brand3} alt='brand3' className='brand-scroller-image' />
                <img src={brand4} alt='brand4' className='brand-scroller-image' />
                <img src={brand5} alt='brand5' className='brand-scroller-image' />
            </div>
            <div className='brand-scroller' style = {{
                marginLeft: '100%'
            }}>
                <img src={brand1} alt='brand1' className='brand-scroller-image' />
                <img src={brand2} alt='brand2' className='brand-scroller-image' />
                <img src={brand3} alt='brand3' className='brand-scroller-image' />
                <img src={brand4} alt='brand4' className='brand-scroller-image' />
                <img src={brand5} alt='brand5' className='brand-scroller-image' />
            </div>
        </div>
    )
}