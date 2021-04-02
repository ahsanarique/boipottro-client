import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const PlaceOrder = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const { name, email, userId } = loggedInUser;

  const onSubmit = (data) => {
    const orderData = {
      userId: userId,
      bookId: id,
      name: data.name,
      email: data.email,
      address: data.address,
      additionalInfo: data.extra,
      date: new Date().toDateString(),
    };

    fetch("https://fast-escarpment-60313.herokuapp.com/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    }).then((res) => {
      console.log("order placed", res);
    });
  };

  const orderIcon = <FontAwesomeIcon icon={faClipboardCheck} />;

  const placeOrderStyle = {
    width: "40rem",
  };

  return (
    <Card bg="light" className="container mt-5 rounded" style={placeOrderStyle}>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>
              Name:{" "}
              {errors.name && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              name="name"
              defaultValue={name}
              ref={register({ required: true })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              Email Address:{" "}
              {errors.email && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              name="email"
              defaultValue={email}
              ref={register({ required: true })}
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>
              Delivery Address:{" "}
              {errors.address && <span className="text-danger">Required</span>}
            </Form.Label>
            <Form.Control
              name="address"
              placeholder="Your Address"
              ref={register({ required: true })}
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Additional Information (Optional):</Form.Label>
            <Form.Control
              name="extra"
              placeholder="eg. Apartment, studio, or floor"
              ref={register}
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="bg" block>
            {orderIcon} Place Order
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PlaceOrder;
