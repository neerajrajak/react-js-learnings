import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    {id: 'p1', title:'Samsung'},
    {id: 'p2', title:'Motorola'},
    {id: 'p3', title:'Oppo'}
]

const Products = ()=>{
    return <>
    <h1>My Products Page.</h1>
    <ul>
        {
            DUMMY_PRODUCTS.map((prod)=> <li key={prod.id}>
                <Link to={prod.title}>{prod.title}</Link>
            </li>)
        }
    </ul>
    </>
}

export default Products;