import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const MyReviewCard = ({re}) => {
    const {review} = re;
    return (
        <div>
            <Container>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="warning">Update</Button>{' '}
                <Button variant="warning">Delete</Button>
            </Form>
            
        </Container>
        </div>
    );
};

export default MyReviewCard;