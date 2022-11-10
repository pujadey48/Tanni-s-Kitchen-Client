import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    useEffect(()=>{
        document.title = "Tanni's Kitchen | Blogs Page"
    })
    return (
        <Container>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header> Difference between SQL and NoSQL</Accordion.Header>
        <Accordion.Body>
          
        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
        <Accordion.Body>
        <p>FJWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
        <Accordion.Body>
        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
        <Accordion.Body>
        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container> 
    );
};

export default Blogs;