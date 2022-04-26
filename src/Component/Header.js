import React from 'react'

const Header = () => {
  return (
    <div>    
 <header>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center">
                    <img src="./joust-logo.svg" className="brand-logo" />
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