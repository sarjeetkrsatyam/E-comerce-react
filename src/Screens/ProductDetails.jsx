import React from "react";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Product from "../Product";
import { useParams } from "react-router-dom";
const ProductDetails = (match) => {
  const product = Product.find((p) => p.id === match.params.id);
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col> </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
