import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import BookCard from "../BookCard/BookCard";

const Home = () => {
  return (
    <div>
      <Search />
      <BookCard />
    </div>
  );
};

export default Home;
