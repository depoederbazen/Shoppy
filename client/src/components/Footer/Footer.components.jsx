import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Card className="mt-6 bg-dark">
        <CardBody>
          <div className="d-md-flex justify-content-around align-items-start">
            <h1 className="display-1 text-white">Shoppy</h1>
            <div>
              <h2 className="text-white">Policies & Info</h2>
              <h4 className="text-white font-weight-400">Terms Conditions</h4>
              <h4 className="text-white font-weight-400">Policy for Sellers</h4>
              <h4 className="text-white font-weight-400">Policy for Buyers</h4>
              <h4 className="text-white font-weight-400">Shipping & Refund</h4>
              <h4 className="text-white font-weight-400">Wholesale Policy</h4>
            </div>
            <div>
              <h2 className="text-white">Categories</h2>
              <Link to="/products/Electricals%20&%20Electronics">
                <h4 className="text-white font-weight-400">
                  Electricals & Electronics
                </h4>
              </Link>
              <Link to="/products/Home%20Appliances">
                <h4 className="text-white font-weight-400">Home Appliances</h4>
              </Link>
              <Link to="/products/Furniture">
                <h4 className="text-white font-weight-400">Furniture</h4>
              </Link>
              <Link to="/products/Sports">
                <h4 className="text-white font-weight-400">Sports</h4>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default Footer;
