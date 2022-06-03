import React from "react";

const OverlayFromRight = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.23) 2%, rgba(29, 29, 29, 0.72) 50%, rgba(29, 29, 29, 0.95) 100%)",
      }}
      aria-hidden="true"
    />
  );
};

export default OverlayFromRight;
