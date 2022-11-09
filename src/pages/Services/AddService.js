import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddService = () => {
    return (
        <Container>
            <h3 className='text-warning fs-2 fst-italic'>Add a service</h3>
            <Form className="w-50 h-50">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Service Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicImageurl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Enter Image URL" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicRating">
                <Form.Label>Rating</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Service Details</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </Form>
        </Container>
    );
};

export default AddService;