
 
import React from "react"; 
import './Provide.css'; 
import {Link} from 'react-router-dom'; 
import '../Home/Listing/Listing'
class Provide extends React.Component { 
   
   
    constructor(props) { 
        super(props); 
    
        this.state = { 
            items: [], 
            DataisLoaded: false 
        }; 
    } 
    
     
    
    
    componentDidMount() { 
        fetch( 
"https://sleepy-savannah-74760.herokuapp.com/category") 
            .then((res) => res.json()) 
            .then((json) => { 
                console.log(json) 
               
                this.setState({ 
                    items: json,
                   
                    DataisLoaded: true 
                   
                }); 
            }) 
           
         
    } 
   
    render() { 
        
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1> </h1> </div> ; 
   
 
      
       
   return (
    
    <div  id="aboutsca1">
    <div id="head1">
     <h1> What We Provide?</h1>
      </div> 

   
     
       
      
         
    { 
            items.map((item) => ( 
                console.log(item.category),
             
              <div id="newpic">
             
             
              <Link to={`/Listing/${item.id}`}key={item._id}><img src={item.image}></img></Link>
                   
                <div className="name">
                    <h1>{item.category}</h1>
            

             </div>
             </div>
           
          
           )) 
         
    }    
    
     
    </div>


    
    
); 
}
        
}
    
export default Provide;