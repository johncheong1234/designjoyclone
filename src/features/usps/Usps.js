import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Usps() {
    return (
        <div className='usps-container'>
            <div className='usps'>
                <div className='usps-header'>
                    We didn't reinvent the wheel, just design
                </div>
                <div className='usps-text'>
                    Design as you know it is out the door. Design as you want it just arrived.
                </div>
                <div class="usps-details container">
                    <div class="row">
                        <div class="usps-detail col-md">
                            <p class="usps-detail-text">Subscribe to a plan & request as many designs as you'd like.</p>
                        </div>
                        <div class="usps-detail col-md">
                            <p class="usps-detail-text">Receive your design within a few business days on average, Monday to Friday.</p>
                        </div>
                        <div class="usps-detail col-md">
                            <p class="usps-detail-text">We'll revise the designs until you're 100% satisfied.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}