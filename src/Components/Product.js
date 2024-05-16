import { Link, Outlet } from "react-router-dom";

function Product(){

    const products = [
        { id: 1, name: 'Product 1', price: 10, description:'this is th edescript for product1',rating:'4.5' },
        { id: 2, name: 'Product 2', price: 20 ,description:'this is th edescript for product2',rating:'4.5' },
        { id: 3, name: 'Product 3', price: 30,description:'this is th edescript for product3',rating:'4.5' }
    ];
    return (
        <div>
            <ul>
            
            {
                products.map(product=>(
                    <li key={product.id}>
                         <Link to={`/product/${product.id}?name=${product.name}&price=${product.price}`}>{product.name}</Link>
                    </li>
                ))
            }
            </ul>

            <div>
            {/* define the navlinks for newcars and oldcars */}
            <Link to="newcars">New Cars</Link>
            <Link to="oldcars">Old Cars</Link>
            </div>
            <div>
                {<Outlet />}
            </div>
            
        </div>
    )
}

export default Product;