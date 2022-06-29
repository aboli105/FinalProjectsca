import React,{component} from 'react';
import DetailDes from './DetailDes';


 import './details.css';

 
    let url ;
    let levelid;

 class Details extends React.Component{
        constructor(props){
            super() 
            this.state = { 
                items: [], 
                sample: '',
            }; 
            console.log(props)
            levelid = props.match.params.levelid
            sessionStorage.setItem("id",levelid)
            url = `https://sleepy-savannah-74760.herokuapp.com/details?levelid=${levelid}`
        }
        
      
      

    componentDidMount(){
        fetch(url)
        .then(res => res.json())
        .then((data) => {
        
           this.setState({
               items:[...this.state.items,data[0]]
           })
           console.log(this.state.items)
        }
        )
    }
       data1 =(data) =>{
            this.setState({
                sample:data
            })
       }
  
    render(){
        console.log(this.state.items)
        return(
            <>
            <div id='new'>
              <DetailDes  abo={this.state.items}  senddata={(data)=> this.data1(data) } />
             
            </div>
            <h1>{this.state.sample}</h1>
       
            </>
            
        )
    }
 }



 export default Details