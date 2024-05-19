import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer1'>
            <div className='footerIcon'>
                <img src="./Finsworth1.png" alt=""/>
            </div>
            <div className='footerText'>
                <p>What fashion statement would you like to make? 
                <br/>Refresh your style with on-trend pieces from our collection.</p>
            </div>
            <div className='footerSocials'>
                <img src="./darkFb.png" alt=""/>
                <img src="./location.png" alt=""/>
                <img src="./twitter.png" alt=""/>
            </div>
        </div>
        <div className='footer2'>
            <h4 style={{fontSize: "2rem", color: "goldenrod"}}>Navigations</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Services</li>
                <li>Login</li>
            </ul>
        </div>
        <div className='footer2'>
            <h4 style={{fontSize: "2rem", color: "goldenrod"}}>Services</h4>
            <ul>
                <li>Blog</li>
                <li>Financial Consultation</li>
                <li>Legal Services</li>
                <li>Photography</li>
                <li>Photography</li>
            </ul>
        </div>
        <div className='footer4'>
            <h4 style={{fontSize: "2rem", color: "goldenrod"}}>Contact Us</h4>
        </div>
    </div>
  )
}

export default Footer
