import React,{Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
class Header extends Component {

    render(){
        return (
          <div >
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   <img src='https://i.ibb.co/QXGQyKh/SARASWATI-CAREERS-ACADEMYt-1-removebg-preview.png'></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
           <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
         
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        <li class="nav-item">
          <Link  to="/Mycart" className="nav-link">My Courses</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Media</a>
        </li>
      </ul>
    </div>
 

                  <button class="btn btn-primary" type="submit"  href="./loginpage.html"> Login</button>
                 
            
              </div>
               
              </nav>
          </div>
      
    
         
         
  
        )
    }
    
}

export default Header;