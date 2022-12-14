import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
import {useRef, useEffect} from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { FaBeer } from "react-icons/fa";
import { DatePicker } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './bootstrap/BasicExample';
import CarouselExample from './bootstrap/Carousel';

/* Register ScrollTrigger Plugin */
gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration: 3, scrollTrigger: {
      trigger: el
    }})
  }, [])
  return (
    <div className="App">
        <div className='helper'>
        </div>
        <FaBeer />
        <DatePicker />
        <div className='container'>
          <CarouselExample/>
        </div>
        <img src={logo} className="App-logo" alt="logo" ref={imgRef}/>
    </div>
  );
}

export default App;
