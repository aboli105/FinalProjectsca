import React from "react";
import '.././closure/Closure.css'



const Closure = () => {
    return(
        <div>
    
    <div class="new">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
         
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
           {/* <!-- <div id="coupn"> -->
            
              <!-- <button onClick='closeCoupn()' style="margin-left: 96%;">&times;</button> --> */}
  </div>
            <div class="carousel-item active">
              <img src="https://i.ibb.co/5sbMx6T/1585755374291.jpg"  class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h1>Saraswati Careers Academy</h1>
                <p>Learn More Skills,be more Competitive</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://i.ibb.co/nLvT8bd/adobestock-86405056.jpg" class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h1>Saraswati Careers Academy</h1>
                <p>Learn More Skills,be more Competitive</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://i.ibb.co/cCMW44t/education-institutional-banner-img.jpg" class="d-block w-100" alt="..."/>
              <div>
                
              </div>
              <div class="carousel-caption d-none d-md-block">
                <h1>Saraswati Careers Academy</h1>
                <p>Learn More Skills,be more Competitive.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      
    </div>

    )
}


export default Closure