import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import AddReview from "../Review/AddReview";
import ServiceDetailsReviewCard from "../Review/ServiceDetailsReviewCard";

const ServiceDetails = () => {
   const { service, reviews } = useLoaderData();
   

  const { user } = useContext(AuthContext);

  console.log("ServiceID", service._id);
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <Card.Text>Price: tk{service.price}</Card.Text>
          <Card.Text>Rating: {service.rating}</Card.Text>
        </Card.Body>
      </Card>
      {reviews.length === 0 && (
        <div className="mt-5">
          <h1 className="fs-2 fw-semibold text-danger text-center">No reviews were added</h1>
        </div>
      )}
      {reviews.length > 0 && (
        <div>
          <h3 className="mt-5">There are {reviews.length} reviews</h3>
          <div className="d-flex flex-wrap">
            {reviews.map((rev) => (
                <ServiceDetailsReviewCard key={rev._id} rev={rev}></ServiceDetailsReviewCard>
            ))}
        </div>
        </div>
      )}
      {user && <AddReview key={service._id} serviceId={service._id}></AddReview>}





    </Container>
  );
};

export default ServiceDetails;
