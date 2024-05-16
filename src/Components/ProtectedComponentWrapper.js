

function ProtectedWrapper({children }){

    let isAuthenticated=true;

    console.log(children);

    return isAuthenticated 
        ? children
        : <p>test</p>;
}

export default ProtectedWrapper;