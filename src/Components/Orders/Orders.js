import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => {
        const userOrder = data.filter((order) => order.userId === id);
        setOrderData(userOrder);
      });
  }, [id]);

  return (
    <Card className="container my-5">
      <Card.Body>
        <h5>Placed Orders</h5>
        <hr />
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Delivery Address</th>
              <th>Order for</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr key={order._id}>
                <td>{order.bookId}</td>
                <td>{order.address}</td>
                <td>{order.name}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Orders;
