import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";

const NavigationBar = () => {
  const [loggedInUser] = useContext(UserContext);
  const { image, isSignedIn } = loggedInUser;

  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;
  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />;

  const avatarStyle = {
    verticalAlign: "middle",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  const avatar = (
    <img className="mx-2" style={avatarStyle} src={image} alt="avatar" />
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <span className="mx-2">{bookIcon}</span> Boipottro
          </Navbar.Brand>
        </Link>

        <Nav className="ml-auto">
          <Link className="nav-link mx-2" to="/">
            Home
          </Link>
          <Link className="nav-link mx-2" to="/orders">
            Orders
          </Link>
          <Link className="nav-link mx-2" to="/admin">
            Admin
          </Link>
          <Link className="nav-link mx-2" to="/deals">
            Deals
          </Link>
        </Nav>

        {isSignedIn ? (
          avatar
        ) : (
          <Link className="mx-2" to="/login">
            <Button variant="outline-info">{loginIcon} Login</Button>
          </Link>
        )}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
