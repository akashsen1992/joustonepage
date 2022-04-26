import React from 'react'
import Slidersection from './Slidersection';

import Footer from './Footer';


const Home = () => {
    const myStyle={
        backgroundImage: 
 "url('./bg-1.webp')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <>
    <section className="hero-bg" style={myStyle}>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="left-section d-flex align-items-center">
                        <div>
                            <h1>Set The World On Fire With Your <span>Flaming Talent</span></h1>
                            <a href="#" className="btn-see"><img src="./ic-video.png" /> See Videos</a>
                            <h5>DOWNLOAD THE APP</h5>
                            <div className="store-wrapper">
                                <a href="#"><img src="./ic-appstore.png" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.joust.nft" target="_blank"><img src="./ic-playstore.png" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        
                        <div className="responsive">
                     
                            {/* <div><img src="./hero-mob.png" class="" /></div>
                            <div><img src="./hero-mob.png" class="" /></div>
                            <div><img src="./hero-mob.png" class="" /></div> */}
                            <Slidersection />
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="list-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="lists">
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/798b7845-fb49-453f-9b4c-1de8277dba1b-1644088022717.png" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/c9e132ba-8f78-4858-a355-162702c6176e-1644983036637.png" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/edb581cb-d749-4a06-ae0c-18ea6db39c54-1649317809841.png" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/8e2a7cfb-09cc-45c3-b297-908f2c672c48-1647182351809.png" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>

                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/4f92720f-c3d2-4659-814f-f252fabb5adb-1615821554241.jpg" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/d9959ad9-9525-4a07-8190-bd1d9236b2e4-1644120947760.png" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/4f92720f-c3d2-4659-814f-f252fabb5adb-1615821554241.jpg" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/16667058-21ba-4bf4-bbb6-4272355d2d84-1650201077647.jpeg" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                        <li>
                            <div className="imgbox"><img src="https://media.chingari.io/apipublic/uploads/profilePic/0a10ab94-ba81-433a-86c0-eac8237b9380-1642327846813.png" /></div>
                            <div className="imbtxt">
                                <h4>Lorum ipsum</h4>
                                <img src="./ic-flame.png" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</>
  )
}

export default Home