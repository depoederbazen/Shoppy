// Libraries
import React from "react";
import { Card, CardImg, CardBody, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Components
import RatingStar from "../RatingStars/RatingStars.component";

const ProductCard = ({
  Product_image1,
  Product_name,
  Product_Price,
  Category,
  Product_ID,
  Rating,
}) => {
  return (
    <>
      <Col className="my-3" sm="6" lg="3">
        <Card className="shadow">
          <Link to={`/products/${Category}/${Product_ID}`}>
            <CardImg
              top
              src={Product_image1}
              alt="Card image cap"
              style={{ height: "30vh", padding: "1rem" }}
            />
          </Link>
          <CardBody>
            <RatingStar rating={Rating} />

            <Link to={`/products/${Category}/${Product_ID}`}>
              <h4 className="mt-1 text-truncate font-weight-400">
                {Product_name}
              </h4>
            </Link>
            <h2 className="mt--1 font-weight-900">₹ {Product_Price}</h2>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
