import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import BookCard from "../BookCard/BookCard";

const Home = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("https://fast-escarpment-60313.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
      });
  }, []);

  return (
    <div>
      <Search />
      <div className="container-md d-flex justify-content-center flex-wrap">
        {bookData.map((each) => (
          <div key={each._id}>
            <BookCard
              id={each._id}
              book={each.book}
              author={each.author}
              price={each.price}
              imageURL={each.imageURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
