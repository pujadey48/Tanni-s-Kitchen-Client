import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();

  return (
    <Container>
      <div className="d-flex flex-wrap">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </Container>
  );
};

export default Services;
