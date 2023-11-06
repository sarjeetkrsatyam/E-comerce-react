import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Rating from "./Rating";

const ProductScreen = ({ Product }) => {
  return (
    <>
      <Card className=" my-3 p-d rounded">
        <Link to={`/Product/${Product.id}`}>
          <Card.Img src={Product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/Product/${Product.id}`}>
            <Card.Title as="div">
              <strong>{Product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            {/* <div className="my-3">
              {Product.rating} from {Product.numReviews} reviews
            </div> */}
            <Rating value={Product.rating} text={`${Product.numReviews} reviews`} />
          </Card.Text>
          <Card.Text as="div">${Product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
