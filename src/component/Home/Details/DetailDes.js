import React, { useEffect, useState } from "react";
import './DetailDes.css';

let Url = "https://sleepy-savannah-74760.herokuapp.com/addToCart"

const DetailDes = (props) =>{
   
    const [items,setitems] = useState("")

  const addtocart =(cartid) =>{

    console.log("abc")
         console.log(cartid)
         fetch(Url, {
          method: 'POST',
          headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(items)
      })
      .then(res => console.log(res.status))
  }
 
  useEffect(()=> {
    let levelid = sessionStorage.getItem("id",)
    fetch(`https://sleepy-savannah-74760.herokuapp.com/details?levelid=${levelid}`)
    .then(res => res.json())
    .then((data) => {
      setitems(data[0])
    })
     
  },[])



    const displaydetails =({abo}) =>{
      if(abo) {
        console.log (abo)
      
         return abo.map((items) => {
            return <div key={items.category_id}>
            
              <div id="text"> <img src={items.Imagea_src}></img>
           </div>  
           <div id="textmain">  <div  id="text1">
              <h1>{items.level}</h1>  
              <h6>{items.Tagline}</h6>
              <h4>{items.category}</h4>
              
              <h6>Duration : {items.Duration}</h6>
              <h4>₹{items.Price}</h4>
                  {/* <div>
                    <i class="bi bi-star-fill" style="color: goldenrod;"></i>
                    <i class="bi bi-star-fill"style="color: goldenrod;"></i>
                    <i class="bi bi-star-fill" style="color: goldenrod;"></i>
                    <i class="bi bi-star-fill" style="color: goldenrod;"></i>
                    <i class="bi bi-star-half" style="color: goldenrod;"></i>
                    </div> */}
                  
                
             <div id="btn"> <button type="button" class="btn btn-primary btn-lg" onClick={(cartid)=>addtocart(items.level_id)}>Add</button></div>
          
              
              </div>
              
            </div>
            <div id="des">
              <div id="des1">
                <h3>
                Description

                </h3>
                <p>
                  {items.Des}
                </p>
                <p>
                  {items.Des}
                </p>
                <h3>
                Who Should Join Course :

                </h3>
                <p>{items.Who_Should}</p>

              </div>

            </div>
           
            </div>
          
          
         }
         )
      }
    }
    const display  = (props) =>{
        props.senddata('aboli')
    }

    return(
        <>
        <div>
                 {displaydetails(props)}
        </div>
       
        </>
    )
}

export default DetailDes