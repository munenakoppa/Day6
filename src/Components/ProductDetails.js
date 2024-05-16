import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 
 
function ProductDetails(){
 
    const products = [
        { id: 1, name: 'Product 1', price: 10, description:'this is th edescript for product1',rating:'4.5' },
        { id: 2, name: 'Product 2', price: 20 ,description:'this is th edescript for product2',rating:'4.5' },
        { id: 3, name: 'Product 3', price: 30,description:'this is th edescript for product3',rating:'4.5' }
    ];
 
    const {id} = useParams();
    const navigate=useNavigate();
    const search = useLocation().search;
    const queryParams=new URLSearchParams(search);
    const name=queryParams.get('name');
    const price=queryParams.get('price');
    console.log(id,name,price);
    // call the backedn apt to dte about the product
 
    var product = products.find((product) => product.id == id);

    function goBack(){
        navigate('/products');
    }
 
    return (
        <div>
            <h2>Product Detail</h2>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
            <h2>{product.rating}</h2>
            {/*<RatingComponent value={product.rating}/>*/}
            <button onClick={goBack}>Back</button>
        </div>
    );
}
 
export default ProductDetails;