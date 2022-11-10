import React, { useContext, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const services = useLoaderData();
  const {user, loading}= useContext(AuthContext)
    useEffect(()=>{
        document.title = "Tanni's Kitchen | Services Page"
    })
    if(loading){
        return (
            <div className="d-flex ustify-content-center align-items-center">
                <Spinner className="mx-auto" animation="border" variant="primary" />
            </div>
        ) 
    }
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
