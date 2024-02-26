// SYNTAX

// USAGE
import React, { useEffect, useState } from "react";

function MyComponent() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log("Hello World!");
    return () => {
      console.log("Goodbye!");
    };
  }, []);

  return <h1>Oke</h1>;
}

export default MyComponent;
