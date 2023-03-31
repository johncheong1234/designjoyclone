import React from 'react';
import staticPortfolioImage1 from '../../assets/staticPortfolioImage1.png';
import staticPortfolioImage2 from '../../assets/staticPortfolioImage2.png';
import staticPortfolioImage3 from '../../assets/staticPortfolioImage3.png';
import staticPortfolioImage4 from '../../assets/staticPortfolioImage4.png';

export function StaticPortfolio() {
    return (
        <div className='static-portfolio-section' style={{
            animation: 'fadeInFromBottom 0.8s'
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '120px',
                    gap: '50px',
                }}
            >
                <div>
                    <img src={staticPortfolioImage1} width={'100%'} />
                    <div style={{
                        marginLeft: '10px',
                        marginTop: '10px'
                    }}>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk Bold',
                            marginBottom: '0px'
                        }}>PwC Raise</p>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk',
                        }}>Report, Branding, Custom Graphics</p>
                    </div>
                </div>
                <div>
                    <img src={staticPortfolioImage2} width={'100%'} />
                    <div style={{
                        marginLeft: '10px',
                        marginTop: '10px'
                    }}>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk Bold',
                            marginBottom: '0px'
                        }}>TradePal Loan App</p>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk',
                        }}>Product, Branding, Development</p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: '10%'
                }}
            >

            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px'
                }}
            >
                <div>
                    <img src={staticPortfolioImage3} width={'100%'} style={{
                        borderRadius: '10px'
                    }} />
                    <div style={{
                        marginLeft: '10px',
                        marginTop: '10px'
                    }}>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk Bold',
                            marginBottom: '0px'
                        }}>MAAX Hair Salon</p>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk',
                        }}>Social Media Marketing, Logo, Website</p>
                    </div>
                </div>
                <div>
                    <img src={staticPortfolioImage4} width={'100%'} />
                    <div style={{
                        marginLeft: '10px',
                        marginTop: '10px'
                    }}>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk Bold',
                            marginBottom: '0px'
                        }}>TradePal Fund I</p>
                        <p style={{
                            fontFamily: 'Cabinet Grotesk',
                        }}>Investor Materials, Branding</p>
                    </div>
                </div>
            </div>
        </div>
    )
}