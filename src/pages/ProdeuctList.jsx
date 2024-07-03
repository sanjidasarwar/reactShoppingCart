import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCart from "../components/ProductCart";
import useFetchData from "../hooks/useFetchData";

function ProdeuctList() {
  const { data } = useFetchData("https://fakestoreapi.com/products");

  return (
    <>
      <Container>
        <Row className="g-4 my-4">
          {data?.map((product) => (
            <Col md={4} key={product.id}>
              <ProductCart item={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProdeuctList;
