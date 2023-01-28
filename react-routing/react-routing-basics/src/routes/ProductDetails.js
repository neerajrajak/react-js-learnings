import { Link, useParams } from "react-router-dom";

const ProductDetails = ()=>{
    const params = useParams();
    return <>
        <h1>Detail Product Summary</h1>
        <p>Detail of { params.productId}</p>
        <p><Link to=".." relative="path">Back</Link></p>
    </>
}

export default ProductDetails;