import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const scrolltoTop = ()=>{
        window.scrollTo(0, 0);
    }
  return (
    <footer className="footer-section">
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p>© 2021 - 2022 Joust Holdings. All Rights Reserved.</p>
                <ul className="footer-list">
                    <li><Link to="/privacypolicy" onClick={scrolltoTop}>Privacy Policy</Link></li>
                    <li><Link to="/termCondition" onClick={scrolltoTop}>Terms of Services</Link></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer