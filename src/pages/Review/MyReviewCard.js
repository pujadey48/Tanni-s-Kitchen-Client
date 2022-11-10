import React, { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getUrl } from "../../Util/Util";

const MyReviewCard = ({ rev, handleDeleteReview, handleUpdateReview }) => {
  const { _id, review, serviceName, rating } = rev;
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const performDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(getUrl(`/reviews/${id}`), {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            handleDeleteReview(id);
          }
        });
    }
  };

  const performUpdate = (event) => {
    const proceed = window.confirm(
      "Are you sure, you want to update this review?"
    );
    if (proceed) {
        event.preventDefault();
        const form = event.target;

        const reviewTest = form.review.value;

        console.log("form", reviewTest);

      fetch(getUrl(`/reviews/${_id}`), {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
        body: JSON.stringify({review: reviewTest})
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const rev = {_id: _id,
            review: reviewTest};
            handleUpdateReview(rev);
          }
        });
    }
  };

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
            <Card.Text>Rating: {rating}</Card.Text>
            <Button variant="warning" onClick={handleShow}>Update</Button>{" "}
            <Button
              variant="warning"
              onClick={() => {
                performDelete(_id);
              }}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={performUpdate}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Update Review</Form.Label>
                    <Form.Control as="textarea" rows={3} name="review"/>
                </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default MyReviewCard;
