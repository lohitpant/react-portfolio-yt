import React from 'react'
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='headd'>
            <div className='header-wraper'>
                <div className='main-info'>
                    <h1>Web Development and Website Promotions</h1>
                    <Typed className='typed-text' strings={["Web Design", "Social Media Marketing", "Google Adwords", "Web Development"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    <a href='#' className='btn-main-offer'>Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header
