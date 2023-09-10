import React from "react";
import Styles from "./css/search.module.css";

const SearchBox = () => {
  return (
    <div className="container flex justify-center px-2 items-center lg:w-full lg:px-4">
      <input
        type="text"
        className="h-12 w-full pl-4 pr-4 rounded-lg z-0 shadow-md focus:shadow focus:outline-none"
        placeholder="Search Contacts"
      />
    </div>
  );
};

export default SearchBox;
