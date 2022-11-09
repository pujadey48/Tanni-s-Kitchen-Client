import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const {service, reviews} = useLoaderData();

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Card >
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                {service.description}
                </Card.Text>
                <Card.Text>
                Price: tk{service.price}
                </Card.Text>
                <Card.Text>
                Rating: {service.rating}
                </Card.Text>
            </Card.Body>
            </Card>
            <div>
                <h3 className='mt-5'>There are {reviews.length} reviews</h3>


            </div>
            {user && (
                <div>
                <h3 className='mt-5'>Add a review</h3>
                <Form className="w-50 h-50">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Form>

            </div>
            )}
        </Container>
    );
};

export default ServiceDetails;