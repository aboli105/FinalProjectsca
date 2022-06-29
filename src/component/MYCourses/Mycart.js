import React, { useEffect, useState } from "react";
import './Mycart.css'
import './Displaycart' 
import DisplayCart from "./Displaycart";

let Url  = `https://sleepy-savannah-74760.herokuapp.com/viewcart`

const Mycart = () =>{
        
  const one=(data) =>{
     setkey(data)
    
  }
  const [key,setkey ] = useState("")
    const [cart,setcart ] = useState("")

    useEffect(() => {
        fetch(Url)
        .then(res => res.json())
        .then((data) => {
          setcart(data)
          console.log("useEffect")
        })
    },[key] )
    
    
    return(
           <div > 
            
                 <DisplayCart add={cart} getdata={(data)=>{one(data)}}/>
           </div>
    )
}

export default Mycart