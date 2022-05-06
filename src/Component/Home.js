import React, { useEffect, useState } from 'react'
import Slidersection from './Slidersection';
import axios from 'axios';
import Footer from './Footer';


const Home = () => {
    const[videos,setvideos] = useState([]);
   
    useEffect(()=>{
        axios.get(`https://apiv2.bestjoust.com/api/admin/allvideos`)
        .then(res => {
          const allvideos = res.data.data;
          setvideos(allvideos)
          console.log(allvideos);
          //this.setState({ persons });
        })
    },[])
    const myStyle={
        backgroundImage: 
 "url('./bg-1.webp')",
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
                            <h1> Showcase your skills and talent to the world through  <span>Challenges</span></h1>
                            <a href="#" className="btn-see"><img src="./ic-video.png" /> See Videos</a>
                            <h5> Download Now!</h5>
                            <div className="store-wrapper">
                                <a href="https://apps.apple.com/us/app/JoustVideo/id1611319643" target="_blank"><img src="./ic-appstore.png" /></a>
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
                        {videos.map((res,index)=>{
                            return    <li key={index}><div className="imgbox">
                                <video  controls>
                                <source src={res.video} type="video/mp4" />                          
                                </video>
                               </div>
                            <div className="imbtxt">
                                <h4>Likes</h4>
                               <p>{res.likes}</p> 
                               
                            </div>
                        </li>
                          
                        })}
                     
                       
                    </ul>
                </div>
            </div>
        </div>
    </section>
   
</>
  )
}

export default Home