import React from "react";
import './Displaycart.css'

const DisplayCart = (props) => {
     
  const deleteorder=(id)   =>{
     let a = Math.random().toFixed(4)
     console.log(a)
         fetch(`https://sleepy-savannah-74760.herokuapp.com/deleteCart/${id}`, {
          method: 'DELETE',
          headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify()
      }).then(res => {
        console.log(res.status)
        if(res.status===200){
           props.getdata(a)
        }
      })
  }
    const cart1 =({add}) =>{
      if(add) {
        console.log(add)
        return add.map((item )  => {
            return   <div key= {item.level_id} className="add1" >
              
                     <div id="main">
                    <div class="tile1">
        <div id="img2">
             <img src ={item.Imagea_src}/>
       </div>
       <div id="img3">   <h2> {item.level}</h2>
       <div id="img4">  <p>{item.Tagline}</p>
          
         <span>Duration : {item.Duration}</span>
       <p id="price"> Price :{item.Price}</p>
       </div>
       
      </div>
      </div>
      <div id="bt">
      <div id="bt1"> <button  type="button" class="btn btn-danger" onClick={() => { deleteorder(item.level_id)}} id="remove2">REMOVE</button></div>
                <div id="bt1">       <button type="button" class="btn btn-success">Buy Now</button></div></div>
                
      </div>
      </div>
           
        })
      }

    }
    
    return(

    <div id="bt2">
    {cart1(props)}
    </div>
    )
}

export default DisplayCart