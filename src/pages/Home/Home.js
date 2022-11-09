import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
       <Container>
        <div>
        <Card className="bg-dark text-white">
            <Card.Img style={{ background: 'linear-gradient(to right,  #151515 0%,rgba(21, 21, 21, 0) 100%)' /* W3C */ }}  src="/ban1.jpeg" alt="Card image" />
            <Card.ImgOverlay className='p-4'>
                <Card.Title className='fst-italic fs-1 text-warning p-4 '>Tanni's Kitchen</Card.Title>
                <Card.Text  className='fst-italic '>A great place to find home made foods</Card.Text>
                <Card.Text className='fst-italic '>
                Here at Tanni's Kitchen, it is part of our mission to provide you
                </Card.Text>
                <Card.Text className='fst-italic'>
                with the best quality food that will fullfil both your hunger and desire.
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
        </div>
        <div className='mt-5'>
            <h1 className='fs-2 fw-semibold text-danger text-center'>Services</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p>Price</p>
        <p>Ratings:</p>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        <div className='mt-5'>
        <Card className="bg-dark text-white">
            <Card.Img  src="/subscribe.jpeg" alt="Card image" className=''/>
            <Card.ImgOverlay className='p-5'>
                <Card.Title className='fs-3 shadow'> Welcome to <span className='text-warning'>Tanni's Kitchen!</span></Card.Title>
                <Card.Text  className='fs-2 shadow'><p><span className='text-warning'>Start Here:</span>Download your free</p> <p>Sensual Cooking Starter Guide</p></Card.Text>
                <Form className='w-50'>
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
            </Card.ImgOverlay>
        </Card>
             
        </div>
        <div className='mt-5'>
        <Row>
            <Col className='p-5'>
            <Card  style={{ width: '25rem' }}>
                <Card.Img variant="top" src="cooking pic.jpeg" />
                
            </Card>
            </Col>
            <Col className='text-center'>
                <h1 className='fs-3'>Learn About The Tanni's Kitchen Story! </h1>
                <p className='mt-5 fs-5'>Tanni's Kitchen is all about sensual cooking and mindful eating.</p>
                <p className='fs-5'>We live, love, and eat by one mantra:</p>
                <p className='fst-italic fs-1 text-warning'>Simple pleasures, deeply felt.</p>
                <p className='fs-5'>We specialize in inspiring a conscious connection with joy by manifesting simple pleasures into our daily lives and aligning with authenticity.</p>
                <p className='fs-5 fw-semibold'>Our philosophy toward cooking is our outlook on life–we savor every moment.</p>
                <p className='fs-5'>At the heart and soul of Tanni's Kitchen is founder, author, and chef Puja Dey (Tanni).</p>
                <Button variant="warning" type="submit">
                    Read More About Puja Here!
                </Button>
            </Col>
        </Row>
        </div>
       
       </Container>
       
    );
};

export default Home;