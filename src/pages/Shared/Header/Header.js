import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { GoogleAuthProvider } from "firebase/auth";
import {
  AuthContext,
  getJWT,
} from "../../../contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Image,
} from "react-bootstrap";
import { FaGoogle, FaUser, FaEnvelope, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const loginDone = (user) => {
    getJWT(user);
    if (user) {
      console.log(user);
    }
    const from = location.state?.from?.pathname || "/";
    if (from) {
      navigate(from, { replace: true });
    }
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        loginDone(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/" className="fs-2 fw-semibold text-danger">
            <img
              alt=""
              src="/myLogo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Tanni's Kitchen
          </Navbar.Brand>
          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services">Services</Nav.Link>
            </Nav.Item>
            {user && (
              <Nav.Item>
                <Nav.Link href="/addServices">Add Service</Nav.Link>
              </Nav.Item>
            )}
            {user && (
              <Nav.Item>
                <Nav.Link href="/myReviews">My Reviews</Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
            </Nav.Item>
            {!user && (
              <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
            )}

            {!user && (
              <Nav.Item>
                <Button variant="outline-primary" onClick={handleGoogleSignIn}>
                  Google Login
                </Button>
              </Nav.Item>
            )}

            {user && (
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL ? user?.photoURL : "/avatar.webp"}
                  ></Image>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/">{user?.displayName}</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogOut}>
                    Log out <FaSignOutAlt></FaSignOutAlt>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
            {/* {!user && (
              <DropdownButton
                as={ButtonGroup}
                key={"Login"}
                id={`dropdown-variants-login`}
                variant={"login"}
                title={"Login"}
              >
                <Dropdown.Item eventKey="1" href="/login">
                  <FaEnvelope></FaEnvelope> Login with Email
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={handleGoogleSignIn}>
                  <FaGoogle></FaGoogle> Login with Google
                </Dropdown.Item>
                
                <Dropdown.Item eventKey="4" href="/register">
                  <FaEnvelope></FaEnvelope> Register Now
                </Dropdown.Item>
              </DropdownButton>
            )} */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
