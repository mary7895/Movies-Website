import React from "react";
import Range from "../range/range";
import "bootstrap/dist/css/bootstrap.min.css";
import "./statics.css";

const Statics = () => {
  return (
    <>
      <div style={{ }}>
        <div className="text-center w-50 m-auto">
          <h1 style={{ paddingTop: "30px" }}>Statics</h1>
          <p style={{ paddingBottom: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio
            minus voluptas, dolor vero doloribus voluptatibus assumenda totam
            commodi dolorem modi facere minima praesentium quis atque voluptatum
            adipisci aut suscipit statics-container
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center statics-container">
          <div className="d-flex statics">
            <h4 style={{ width: "150px" }}>Views :</h4>
            <Range></Range>
          </div>
          <div className="d-flex statics">
            <h4 style={{ width: "150px" }}>Customers :</h4>
            <Range></Range>
          </div>
          <div className="d-flex statics">
            <h4 style={{ width: "150px" }}>Books :</h4>
            <Range></Range>
          </div>
          <div className="d-flex statics">
            <h4 style={{ width: "150px" }}>Hotels :</h4>
            <Range></Range>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statics;
