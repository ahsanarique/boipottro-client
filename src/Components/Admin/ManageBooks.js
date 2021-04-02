import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ManageBooks = () => {
  const [bookData, setBookData] = useState([]);
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = (event) => {
    const deleteId = event.currentTarget.id;
    setDeleteId(deleteId);
  };

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  }, [bookData]);

  useEffect(() => {
    if (deleteId !== "") {
      const url = `http://localhost:5000/delete/${deleteId}`;
      axios.delete(url);
    }
  }, [deleteId]);

  const editIcon = <FontAwesomeIcon icon={faEdit} />;
  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

  return (
    <div className="ml-5">
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book) => (
            <tr key={book._id}>
              <td>{book.book}</td>
              <td>{book.author}</td>
              <td>$ {book.price}</td>
              <td>
                <button className="btn btn-sm btn-outline-success">
                  {editIcon}
                </button>{" "}
                <button
                  id={book._id}
                  onClick={handleDelete}
                  className="btn btn-sm btn-outline-danger"
                >
                  {deleteIcon}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBooks;
