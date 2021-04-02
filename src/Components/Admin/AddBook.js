import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const AddBook = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState("");

  const onSubmit = (data) => {
    const bookData = {
      book: data.book,
      author: data.author,
      price: data.price,
      imageURL: imageURL,
    };

    fetch("https://fast-escarpment-60313.herokuapp.com/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    }).then((res) => {
      console.log("added to server", res);
    });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set("key", "24e85e60f588cdb7cb95cd39f1c3953b");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => setImageURL(response.data.data.display_url))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-5">
      <h2>Add Book</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>
            Book Name:{" "}
            {errors.book && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            name="book"
            type="text"
            placeholder="Enter Book Name"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Author Name:{" "}
            {errors.author && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            name="author"
            type="text"
            placeholder="Enter Author Name"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Add Price:{" "}
            {errors.price && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="Enter Price"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Add Book Cover Image:{" "}
            {errors.bookCover && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            name="bookCover"
            type="file"
            onChange={handleImageUpload}
            ref={register({ required: true })}
          />
        </Form.Group>
        <hr />
        <Button variant="outline-primary" size="lg" type="submit" block>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default AddBook;
