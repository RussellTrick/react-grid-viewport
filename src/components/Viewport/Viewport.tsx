import React, { useEffect, useRef, useState } from "react";
import "./Viewport.scss";

const Viewport = () => {
  const divRef = useRef(null);
  const [divDimensions, setDivDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (divRef.current) {
        const { clientWidth, clientHeight } = divRef.current;
        setDivDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);

    if (divRef.current) {
      updateDimensions(); // Initial calculation
      resizeObserver.observe(divRef.current);
    }

    return () => resizeObserver.disconnect(); // Clean up
  }, []);

  return (
    <div ref={divRef} className="viewport">
      {divDimensions.width}
      <br />X<br />
      {divDimensions.height}
    </div>
  );
};

export default Viewport;
