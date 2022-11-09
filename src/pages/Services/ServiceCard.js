import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  const { _id, name, price, img, rating, description } = service;
  return (
    <div className=" col-lg-4 col-md-6 col-12 p-1">
      <Card>
        <Card.Img variant="top" src={img} alt="food" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>Price: tk{price}</p>
          <p>Ratings: {rating}</p>
          <Button variant="primary">Show Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
