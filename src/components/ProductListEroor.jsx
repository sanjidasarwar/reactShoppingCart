import { Link, useRouteError } from "react-router-dom";

function ProductListError() {
    const error = useRouteError()
    console.log(error);
    return ( 
        <div className="career-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Go to Back</Link>
    </div>
     );
}

export default ProductListError;