import GrandChildComponent from "./GrandChildComponent";

function ChildComponent(){
    return(
        <div>
            <h2>I am in Child Component</h2>
            <GrandChildComponent />
        </div>
    )
}

export default ChildComponent;