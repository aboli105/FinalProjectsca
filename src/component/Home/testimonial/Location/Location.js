import React from "react";
import './Location.css'


const Location = ()  => {

    return(
        <div id="location">

<div class="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181481.8150659767!2d-7.923171191997548!3d54.66418954409081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485e10ca99a69975%3A0xf7e528ef6eb7e3d8!2sNorthern%20Ireland%2C%20UK!5e0!3m2!1sen!2sin!4v1645692297111!5m2!1sen!2sin"></iframe>
                </div>
                <div class="map" >
                 <h3 id="c1">Contact Us</h3>
                 <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">,We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Full Name</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Contact Number</label>
                      <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                   <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1" >Check me out</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                 </form> 
                
                </div> 
            </div> 
    )
}
export default Location