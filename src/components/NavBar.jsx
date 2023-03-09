import React, { useState } from "react";

const NavBar = ({ handleSearch }) => {
  const [Search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(Search.toLocaleLowerCase());
    setSearch("");
  };
  return (
    <nav className="navbar navbar-expand-md bg-black">
      <div className="container">
        <a
          href="/"
          className="brand-color navbar-brand  text-uppercase text-bold"
        >
          afc restaurant
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <form
            className="d-flex md:mt-10"
            role="search"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control me-2"
              type="search"
              value={Search}
              onChange={handleChange}
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
