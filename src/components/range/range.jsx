import React from "react";

const Range = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "20rem",
        height: "40px",
        backgroundColor: "#dce6f0",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "#0a58ca",
          width: "10rem",
          height: "40px",
          borderRadius: "12px",
        }}
      >
        <p style={{ paddingTop: "5px", paddingLeft: "15px", color: "white" }}>
          50%
        </p>
      </div>
    </div>
  );
};

export default Range;
