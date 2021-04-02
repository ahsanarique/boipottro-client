import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  handleFbSignIn,
  handleGoogleSignIn,
  initializeLoginFramework,
} from "./loginManager";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const loginDivStyle = {
    maxWidth: "30rem",
    height: "40rem",
  };

  const handleResponse = (res, redirect) => {
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
  const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />;

  return (
    <Card bg="dark" style={loginDivStyle} className="container my-5 rounded">
      <Card.Body className="d-flex flex-column justify-content-center">
        <div className="mb-4">
          <Button
            onClick={() => googleSignIn()}
            variant="outline-warning"
            size="lg"
            block
          >
            <span className="mx-2">{googleIcon}</span> Continue with Google
          </Button>
        </div>

        <div>
          <Button
            onClick={() => fbSignIn()}
            variant="outline-warning"
            size="lg"
            block
          >
            <span className="mx-2">{facebookIcon}</span> Continue with Facebook
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Login;
