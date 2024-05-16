import ThemeContext from "./ThemeContext";
import react,{useContext} from "react";

function GrandChildComponent(){
    const theme = useContext(ThemeContext);

    return(
        <h1 style={{backgroundColor: theme=='dark' ? 'red' :'blue'}}> I am in Grand Child</h1>
    )
}

export default GrandChildComponent;