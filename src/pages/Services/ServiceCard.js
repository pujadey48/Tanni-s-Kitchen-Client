import React from "react";
import { Card } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
  const { _id, name, price, img, rating, description } = service;
  return (
    <div className=" col-lg-4 col-md-6 col-12 p-1">
      <Card>
        {/* <Card.Img variant="top" src={img} alt="food" /> */}
        <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <p>Price: tk{price}</p>
          <p>Ratings: {rating}</p>
          {/* <Button variant="primary"><Link to={`/services/${_id}`}>Show Details</Link></Button> */}
          <Link to={`/services/${_id}`}>
                <button className="btn btn-warning">Show Details</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
