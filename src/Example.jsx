import React from "react";
import BannerContent from "./BannerContent";

const Example = ({
  width = "fit-content",
  height = "fit-content",
  background = "red",
  children,
}) => {
  const bannerStyle = {
    width: width,
    height: height,
    background: background,
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
  };

  return <div style={bannerStyle}>{children}</div>;
};

export default Example;
