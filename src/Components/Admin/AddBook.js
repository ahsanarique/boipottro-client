import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBook = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState("");

  const onSubmit = (data) => console.log(data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Book Name
          </label>
          <input
            name="book"
            type="text"
            className="form-control"
            placeholder="Enter Book Name"
            ref={register({ required: true })}
            id="bookName"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="authorName" className="form-label">
            Author Name
          </label>
          <input
            name="author"
            type="text"
            className="form-control"
            placeholder="Enter Author Name"
            ref={register({ required: true })}
            id="authorName"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Add Price
          </label>
          <input
            name="price"
            type="number"
            className="form-control"
            placeholder="Enter Price"
            ref={register({ required: true })}
            id="price"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Add Book Cover Image
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleImageUpload}
          />
        </div>

        {errors.exampleRequired && <span>This field is required</span>}

        <button className="btn btn-outline-info btn-lg" type="submit" block>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddBook;
