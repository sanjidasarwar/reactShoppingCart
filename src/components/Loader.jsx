import Spinner from "react-bootstrap/Spinner";

function Loader() {
    return ( 
        <div className="loader-container">
        <Spinner animation="grow" variant="primary" />
        </div>
     );
}

export default Loader;