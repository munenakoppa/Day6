import react,{useContext} from "react";
import ThemeContext from "./ThemeContext";

function OtherComponent(){
    const theme = useContext(ThemeContext);
    return(
        <div>
            Other Compoments
            <h1 style={{backgroundColor: theme=='dark' ? 'red' :'blue'}}> I am in Other Compoment</h1>
        </div>
    )
}

export default OtherComponent;