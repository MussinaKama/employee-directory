import React from "react";

const Jumbotron = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "rgb(175, 33, 33)",
        color: "white",
        fontWeight: "bold"
      }}
      className="jumbotron"
    >
      <h1 className="display-3">
        Employee Directory
        <p className="lead"></p>
      </h1>
    </div>
  );
};

export default Jumbotron;
