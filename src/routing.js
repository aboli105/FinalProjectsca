import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/Home/Listing/Listing';
import Details from './component/Home/Details/Details';
import Mycart from './component/MYCourses/Mycart';




const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/Listing/:id" component={Listing}/>
                <Route path="/Details/:levelid" component={Details}/>
                <Route path="/Mycart" component={Mycart}/>
               
                

            <Footer/>
        </BrowserRouter>
    )
}

export default Routing