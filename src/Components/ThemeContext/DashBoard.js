import ChildComponent from "./ChildComponent";

function DashBoard(){

    return(
        <div>
            <h1>In Main DashBoard</h1>
            <ChildComponent />
        </div>
    )
}

export default DashBoard;