import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const MyReviewCard = ({ rev }) => {
  const { review, serviceName, rating } = rev;
  return (
    <div>
      <Container>
        {/* <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="warning">Update</Button>{' '}
                <Button variant="warning">Delete</Button>
            </Form> */}

        <Card className="m-1" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Name: {serviceName}</Card.Title>
            <Card.Text>Review: {review}</Card.Text>
            <Card.Text>
              Rating: {rating}
            </Card.Text>
          </Card.Body>
          <Button variant="warning">Update</Button>{' '}
                <Button variant="warning">Delete</Button>
        </Card>
      </Container>
    </div>
  );
};

export default MyReviewCard;
