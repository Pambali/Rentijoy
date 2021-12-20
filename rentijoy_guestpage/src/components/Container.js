import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Container.css';
import axios from "axios";
import Home from './movieRender/Homelist';
const delay = 2500;

function Container() {

  const [index, setIndex] = React.useState(0);
  const [slideimage,setImage ]= React.useState([]);
  const timeoutRef = React.useRef(null);
  
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const data = async() => {
    try{
    const slideImage = await axios.get("http://localhost:4000/movie/trendingMovie");   
    setImage(slideImage.data)
    }catch(e){
      console.log(e)
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setIndex((prevIndex) => prevIndex === slideimage.length - 1 ? 0 : prevIndex + 1), delay);
       return () => {resetTimeout();};
       // eslint-disable-next-line 
  },[index]);
React.useEffect(()=>{
  data()
},[])
  
  return (
      <div className='hero-container'>
        <h1>RENT AND ENJOY</h1>
        <p>What are you waiting for?</p>
        {localStorage.getItem('log')==='false'&&(<div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
          </Button>
        </div>)}
       <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {
          slideimage.map((slideimage,index) => (
            <div className="slide" key={index} >
              <div className='master-poster'>
                <div className='poster-image'>
                 <img alt='slide' src={slideimage.Poster}></img>
                </div>
                <div className='poster-content'>
                    <h2 className='poster-content-Header'>{slideimage.MovieName}</h2>
                    <p className='poster-content-contents'>Rating: {slideimage.Rating} <i id="star" className="fas fa-star" /></p>
                    <p className='poster-content-contents'>Language: {slideimage.Language}</p>
                </div>
              </div>
              
            </div>
          ))
          }
        </div>
        <div className="slideshowDots">
          {slideimage.map((_, idx) => (
            <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => { setIndex(idx);}}>
            </div>
          ))}
        </div>
        <Home/>
      </div>
   
    </div> 

  );
}

export default Container;
