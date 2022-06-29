import './Heading.css'

const Heading =(props) =>{
    const head1=({headingdata}) => {
            if(headingdata){
                return headingdata.map((item) => {
                    return <div id="hd">
                        <h1> {item.Heading}</h1>
                       <div className="content"> {item.Des1}
                     </div>
                       <div className="imgcontent"> <img src={item.Image} width="100%" height="300px" /></div>
                    </div>
                        
            
                    
                })
                
            }
    }
    return(

        <div>
        {head1(props)}
        </div>
    )
}

export default Heading