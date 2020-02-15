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
        <p className="lead" style={{marginTop: "15px"}}>
          Please sort alphabetically by clicking on heading of each column or search typing first or last names
        </p>
      </h1>
    </div>
  );
};

export default Jumbotron;
