import { NavLink } from "react-router-dom";

function Navigation(){
return(
    <div>
            <NavLink to ="/books" style={{padding:'10px',margin:'10px'}}>Book List</NavLink>
            <NavLink to ="/addBooks" style={{padding:'10px',margin:'10px'}}>Add Book</NavLink>
            <NavLink to ="/metricstream" style={{padding:'10px',margin:'10px'}}>MetricStream</NavLink>
            <NavLink to ="/products" style={{padding:'10px',margin:'10px'}}>Product List</NavLink>
            
       </div>
)
}

export default Navigation;