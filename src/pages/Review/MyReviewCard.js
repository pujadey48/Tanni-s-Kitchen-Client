import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getUrl } from "../../Util/Util";

const MyReviewCard = ({ rev, handleDeleteReview,handleUpdateReview }) => {
  const { _id, review, serviceName, rating} = rev;

  const performDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
        fetch(getUrl(`/reviews/${id}`), {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    handleDeleteReview(id);
                }
            })
    }
}

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
          <Button variant="warning" >Update</Button>{' '}
                <Button variant="warning" onClick={()=>{performDelete(_id)}}>Delete</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default MyReviewCard;
