import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const BookCard = (props) => {
  const cartIconPlus = <FontAwesomeIcon icon={faCartPlus} />;

  return (
    <Card className="bg-light m-2" style={{ width: "20rem" }}>
      <div className="w-100 mt-2 text-center">
        <Card.Img className="w-50" variant="top" src={props.imageURL} />
      </div>

      <Card.Body>
        <Card.Title>{props.book}</Card.Title>
        <Card.Text>
          <small>{props.author}</small>
        </Card.Text>
        <hr />
        <div className="d-flex">
          <h5>Price: ${props.price}</h5>
          <Link className="ml-auto" to={`/checkout=${props.id}`}>
            <Button variant="outline-primary">{cartIconPlus} Buy Now</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
