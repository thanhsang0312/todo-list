import React from "react";

const BannerContent = ({ course, teacher }) => {
  const headerStyle = {
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const textStyle = {
    color: "white",
    fontSize: "bold",
  };

  return (
    <>
      <h1 style={headerStyle}>Welcome to {course || ""}</h1>
      <p style={textStyle}>{teacher || ""}</p>
    </>
  );
};

export default BannerContent;
