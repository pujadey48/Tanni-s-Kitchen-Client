import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { getUrl } from "../../Util/Util";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
  const [error, setError] = useState("");

  const showToastMessage = () => {
    toast.success('Successfully added!', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const service = {
      name: name,
      img: img,
      rating: rating,
      price: price,
      description: description,
    };

    fetch(getUrl("/services"), {
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
          
            //  alert("Service added successfully");
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
    <Container>
      <h3 className="text-warning fs-2 fst-italic">Add a service</h3>
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
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Service Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImageurl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="img" placeholder="Enter Image URL" 
              required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" name="price" placeholder="Enter price" 
              required/>
        </Form.Group>
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
          <Form.Label>Service Details</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" 
              required/>
        </Form.Group>
        <Button  variant="warning" type="submit">
          Submit
        </Button>
        <ToastContainer />
      </Form>
    </Container>
  );
};

export default AddService;
