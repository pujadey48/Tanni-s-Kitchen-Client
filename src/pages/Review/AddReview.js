import React, { useContext, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { getUrl } from "../../Util/Util";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = ({serviceId}) => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  const showToastMessage = () => {
    toast.success('Successfully added!', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const uid = user?.uid || 'unregistered';
    const name = user?.displayName || user?.email || 'Anonimous';
    const photoURL = user?.photoURL || '';
    const rating = form.rating.value;
    const review = form.review.value;

    console.log("ServiceId", serviceId)

    const service = {
        uid: uid,
        serviceId: serviceId,
        name: name,
        photoURL: photoURL,
        rating: rating,
        review: review,
    };

    fetch(getUrl("/reviews"), {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          
            // alert("Review added successfully");
            showToastMessage();
            <ToastContainer />

          form.reset();
          setError("");
        }
      })
      .catch((er) => {
        console.error(er);
        setError(er.message);
      });
  };

  return (
    <Container className="mb-5">
      <h3 className="text-warning fs-2 fst-italic">Add a review</h3>
      {error && (
        <Alert
          key={"danger"}
          variant={"danger"}
          onClose={() => setError("")}
          dismissible
        >
          {error}
        </Alert>
      )}
      <Form className="w-50 h-50" onSubmit={handleAddService}>
        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Label>Rating</Form.Label>
          <Form.Select aria-label="Default select example" name="rating"
              required>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please add a review</Form.Label>
          <Form.Control as="textarea" rows={3} name="review" 
              required/>
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddReview;
