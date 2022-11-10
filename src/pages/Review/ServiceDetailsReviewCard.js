import React from "react";
import { Card } from "react-bootstrap";

const ServiceDetailsReviewCard = ({ rev }) => {
  const { name, review, photoURL, rating } = rev;
  console.log(rev);
  return (
    <div>
      <div className=" col-lg-4 col-md-6 col-12 p-1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={photoURL?photoURL:'/avatar.webp'} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{review}</Card.Text>
            <Card.Text>
              Rating:
              {rating}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetailsReviewCard;
