import React, { useEffect, useRef, useState } from "react";
import "./Viewport.scss";

const Viewport = () => {
  const divRef = useRef(null);
  const [divDimensions, setDivDimensions] = useState({ width: 0, height: 0 });

  // useEffect to get the div dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        const { clientWidth, clientHeight } = divRef.current;
        setDivDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    // Call the function once initially
    updateDimensions();

    // Add event listener for resize
    window.addEventListener("resize", updateDimensions);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div ref={divRef} className="column-container">
      {divDimensions.width}
      <br />X<br />
      {divDimensions.height}
    </div>
  );
};

export default Viewport;
