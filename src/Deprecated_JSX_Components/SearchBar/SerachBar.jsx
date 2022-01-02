import React from "react";
import SearchField from "react-search-field";

import "./index.css";

const SerachBar = ({ onChange, onEnter }) => {
  return (
    <SearchField
      classNames="test-class shadow-lg"
      placeholder="Search for a country..."
      onChange={onChange}
      onEnter={onEnter}
      onSearchClick={onEnter}
    />
  );
};

export default SerachBar;
