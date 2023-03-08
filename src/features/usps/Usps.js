import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "lottie-react";
import dogFootprints from '../../assets/dogFootprints.json';
import polarbear from '../../assets/polarbear.json';
import spinner from '../../assets/spinner.json';

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
                <div className="usps-details container">
                    <div className="row">
                        <div className="usps-detail col-md">
                            <Lottie animationData={dogFootprints} loop={true} style={{
                                height: '150px',
                            }} />
                            <p className="usps-detail-text">Subscribe to a plan & request as many designs as you'd like.</p>
                        </div>
                        <div className="usps-detail col-md">
                            <Lottie animationData={polarbear} loop={true} style={{
                                height: '150px',
                            }} />
                            <p className="usps-detail-text">Receive your design within a few business days on average, Monday to Friday.</p>
                        </div>
                        <div className="usps-detail col-md">
                            <Lottie animationData={spinner} loop={true} style={{
                                height: '150px',
                            }} />
                            <p className="usps-detail-text">We'll revise the designs until you're 100% satisfied.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}