import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const [book, setBook] = useState([]);

  const { id } = useParams();

  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [id]);

  const bookCover = (
    <img
      style={{ width: "80px", height: "100px" }}
      src={book.imageURL}
      alt="book cover"
    />
  );

  return (
    <div style={{ maxWidth: "100rem" }} className="m-5">
      <h4>Checkout</h4>
      <hr />
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Description</th>
            <th className="text-center">Quantity</th>
            <th className="text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="d-flex align-items-center">
              <div>{bookCover}</div>
              <div className="ml-2">
                {book.book} <hr /> by, {book.author}
              </div>
            </td>
            <td className="text-center">01</td>
            <td className="text-right">${book.price}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th colSpan="2">Total:</th>
            <th className="text-right">${book.price}</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-right">
              <Link to={`/placeOrder=${id}`}>
                <Button variant="outline-primary">{cartIcon} Checkout</Button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </Table>
      <hr />
    </div>
  );
};

export default Checkout;
