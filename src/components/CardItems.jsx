import React from "react";
import styled from "styled-components";

const CardItems = ({ title, description, price, imgUrl }) => {
  return (
    <div className="container mb-4">
      <Card className="card flex-row-reverse gap-4">
        <img
          src={`${imgUrl}`}
          className="card-img-top"
          alt="img"
          style={{ maxWidth: "20rem" }}
        />
        <div className="card-body">
          <div className="card-title d-flex justify-content-between align-items-center">
            <h3>{title}</h3>
            <h6
              style={{
                color: "#b45b35",
              }}
            >
              {price}
            </h6>
          </div>
          <div className="card-body">
            <p>{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Card = styled.div`
  @media (max-width: 768px) {
    flex-direction: column !important;
    img {
      max-width: 100% !important;
    }
  }
`;
export default CardItems;
