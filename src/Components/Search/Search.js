import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Search = () => {
  return (
    <div className="container mt-5">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search Books (feature not implemented yet)"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="primary">{searchIcon} Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
