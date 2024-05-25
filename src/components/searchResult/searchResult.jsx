import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchResult = ({ searchMovies }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    handleSearch({ name: e.target.value });
  };

  return (
    <div className="Container">
      <InputGroup className="mb-3">
        <Form.Control
          name="title"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search movie"
          aria-label="Search movie"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchResult;
