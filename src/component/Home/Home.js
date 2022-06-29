import React from 'react';
import Provide from '../Provide/Provide.js';
import Closure from './closure/Closure.js';
import About from './about/About.js';
import Testiimonial from './testimonial/Testimonial.js';
import Location from './testimonial/Location/Location.js';



const Home = () => {
    return(
        <div>
            <Closure/>
            <About/>
        <Provide/>
        <Testiimonial/>
        <Location/>
  
        
    </div>
    )
}

export default Home;