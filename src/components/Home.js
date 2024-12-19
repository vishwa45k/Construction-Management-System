import React, { useEffect, useState } from "react";
import "./Home.css";
import backgroundimg from "../assests/images/blue.avif";
import ff1 from "../assests/images/ff1.webp";
import f2 from "../assests/images/f2.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import img1 from "../assests/images/services/img1.jpg";
import img2 from "../assests/images/services/img2.jpg";
import img3 from "../assests/images/services/img3.jpg";
import img4 from "../assests/images/services/img4.jpg";
import img5 from "../assests/images/services/img5.jpg";
import img6 from "../assests/images/services/img6.jpg";
import img7 from "../assests/images/services/img7.jpg";
import img8 from "../assests/images/services/img8.jpg";
import img9 from "../assests/images/services/img9.jpg";
import img10 from "../assests/images/services/img10.jpg";
import img11 from "../assests/images/services/img11.jpg";
import img12 from "../assests/images/services/img12.jpg";
import img14 from "../assests/images/services/img14.jpg";
import img13 from "../assests/images/services/Renovation.jpg";
function Home() {
  const data = ["Building", "Designing", "Planning"];
  const [content, setContent] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setContent((prev) => (prev + 1) % data.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <>
     <Navbar/>
      <div
        className="container-fluid d-flex justify-content-center align-items-center bg-cover no-repeat"
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center mb-5 pb-5">
          <div className="row pt-5">
            <div className="col mt-5 pt-5">
            <h1
            className=" fw-bold display-1 p-3 mt-5 pt-5 text-white"
            style={{ fontfamily: "sans - serif"}}
          >
            IT'S YOUR DREAM
          </h1>
            </div>
          </div>         
          <h1
            className=" fw-bold p-3 text-warning "
            style={{ fontfamily: "sans - serif"}}
          >
            We are {data[content]}
          </h1>
          <div className="mb-5">

          </div>
        
        </div>
      </div>
{/* Services */}


<div>
<div className="container-fluid mt-2">
  <div className="row justify-content-center mt-3">
    <div className="col-1">
      <div className="text fs-2 fw-bold">SERVICES</div>
    </div>
  </div> 
<div className='row mx-4 my-5'>
<div className="col-md-3 col-sm-6 px-4 py-4">
<Link 
    to={`/services?serviceType=Architecture`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img12} alt="Architecture" className="img-fluid" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center text-decoration-none">Architecture</h5>
       
  </div>
  </Link>
  </div>


  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Concrete`}
    className="text-decoration-none"
  >
    <div className="card card-block">
      <img src={img1} alt="concrete" style={{ height: "200px" }} />
      <h5 className="card-title mt-3 mb-3 text-center">Concrete Works</h5>
    </div>
  </Link>
</div>
  <div className="col-md-3 col-sm-6 px-4 py-4"> 
  <Link 
    to={`/services?serviceType=Foundation`}
    className="text-decoration-none"> 
    <div className="card card-block">
     
    <img src={img2} alt="Foundation" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Foundation</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=PipeLine`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img3} alt="PipleLine Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">PipeLine Works</h5>
       
  </div></Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Electrical`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img4} alt="Electrical Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Electrical Works</h5>
       
  </div></Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Painting`}
    className="text-decoration-none">    
     <div className="card card-block">
     
    <img src={img5} alt="Painting" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Painting</h5>
       
  </div></Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Grouting`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img6} alt="Grouting Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Grouting Works</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Excavation`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img7} alt="Excavation Works" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Excavation Works</h5>
       
  </div></Link>

  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Plumbing`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img8} alt="Plumbing" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Plumbing</h5>      
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Roofing`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img9} alt="Roofing" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Roofing</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Carpentry`}
    className="text-decoration-none"> 
      <div className="card card-block">
     
    <img src={img10} alt="Carpentry" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Carpentry</h5>
       
  </div></Link>
  </div>
  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=InteriorDesign`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img11} alt="Interior Design" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Interior Design</h5>
       
  </div>
  </Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=ExteriorDesign`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img14} alt="EXterior Design" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Exterior Design</h5>
       
  </div>
  </Link>
  </div>

  <div className="col-md-3 col-sm-6 px-4 py-4">
  <Link 
    to={`/services?serviceType=Renovation`}
    className="text-decoration-none"> 
       <div className="card card-block">
     
    <img src={img13} alt="Renovation" style={{height:"200px"}}/>
        <h5 className="card-title mt-3 mb-3 text-center">Renovation</h5>
       
  </div>
  </Link>
  </div>
 </div>   
  </div>
</div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 bg-warning text-center p-4">
            <h1>
              Looking for the best partner for your next construction works?
            </h1>
            <button className="btn btn-outline-dark">HIRE US NOW</button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img src={ff1} alt="logo" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="p-3">
              <u>Planning</u>
            </h1>
            <div className="p-3">
              For the successful execution of a project, effective planning is
              essential. Those involved with the design and execution of the
              infrastructure in question must consider zoning requirements.
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={f2} alt="logo1" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h1 className="p-3">
              <u>Constructing</u>
            </h1>
            <div className="p-3">
              An era where we want to bring the best out of your idea, a moment
              where we care for our clients bringing up their dream design to
              life and actualizing their dreams in real life.
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <img src={f2} alt="logo1" className="img-fluid" />
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="p-3">
              <u>Rebuilding</u>
            </h1>
            <div className="p-3">
              Nobody is perfect they say, at Moxx, we come to rescue. To us
              rebuilding is much more than mere renovation. This is a task we
              take to heart as we want to bring out the best in what was deemed
              the worse or less appealing.
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
