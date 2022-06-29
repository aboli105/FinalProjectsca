
 
import React from "react"; 
import './listing.css'; 
import {Link} from 'react-router-dom';
import Header from "../../../header";
import Heading from '../Listing/Heading'

let param ; 
let url;
class Listing extends React.Component { 
   
   
    constructor(props) { 
        super(props); 
        
        this.state = { 
            items: [], 
            head: [],
            DataisLoaded: false 
        }; 
      param =props.match.params.id
    } 
    
     
    
    
    componentDidMount() { 
        fetch( 
`https://sleepy-savannah-74760.herokuapp.com/level?categoryid=${param}`) 
            .then((res) => res.json()) 
            .then((json) => { 
                console.log(json) 
               
                this.setState({ 
                    items: json,
                   
                    DataisLoaded: true 
                   
                }); 
            }) 
            fetch(`https://sleepy-savannah-74760.herokuapp.com/header/${param}`)
            .then((res)  => res.json())
            .then((data)  => {
                this.setState({
                    head: data
                })
            })
           
         
    } 
   
    render() { 
        
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1>  </h1> </div> ; 
   
 
      
       
   return (
    <div>
        <Heading  headingdata={this.state.head}/>
    
    <div id="newtile">
        <div class="row">
            
         
    { 
            items.map((item) => ( 
                console.log(item.category),
             
             
               <div class="tile">
        <div id="img2">
             <img src ={item.Image}/>
       </div>
       <div id="img3">   <h2><Link to={`/Details/${item.level_id}`}> {item.level}
                                         
                                        </Link> </h2>
        <h6 id="tag">{item.Tagline}</h6>
          
         <span>Duration : {item.Duration}</span>
       <p id="price"> Price :{item.Price}</p>
       
      </div>
               
      </div>

     

          
           )) 
         
    }    
    </div>
    </div>
    </div>
   
    
); 
}
        
}
    
export default Listing;