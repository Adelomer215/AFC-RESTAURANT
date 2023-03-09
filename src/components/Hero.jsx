import React from "react";

const Hero = ({ Items, handlefilter }) => {
  const categories = new Set();
  for (const key in Items) categories.add(Items[key].category);

  return (
    <div className="mb-4">
      <h1 className="text-center mt-2 stext-uppercase text-bold">Food menu</h1>
      <div className="d-flex my-4 justify-content-center">
        <p className="underline"></p>
      </div>
      <div className="foods d-flex justify-content-center gap-4">
        <button
          className="btn text-uppercase"
          onClick={(e) => handlefilter(e.target.textContent)}
        >
          all
        </button>
        {Array.from(categories).map((ele) => {
          return (
            <button
              key={ele}
              className="btn text-uppercase"
              onClick={(e) => handlefilter(e.target.textContent)}
            >
              {ele}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
