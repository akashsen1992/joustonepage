import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const scrolltoTop = ()=>{
    window.scrollTo(0, 0);
}
  return (
    <div>    
 <header>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center">
                   <Link to='/'> <img src="./joust-logo.svg" className="brand-logo" onClick={scrolltoTop()} /></Link>
                    <a href="https://bestjoust.com/#/" className="btn-connect">Connect to Joust</a>
                </div>
            </div>
        </div>
    </div>
</header>
</div>
  )
}

export default Header