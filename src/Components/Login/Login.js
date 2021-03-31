import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
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
    width: "30rem",
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
    <div>
      <div style={loginDivStyle} className="text-center my-4">
        <Button onClick={() => googleSignIn()} variant="info" size="lg" block>
          <span className="mx-2">{googleIcon}</span> Sign in with Google
        </Button>
        <Button onClick={() => fbSignIn()} variant="info" size="lg" block>
          <span className="mx-2">{facebookIcon}</span> Sign in with Facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
