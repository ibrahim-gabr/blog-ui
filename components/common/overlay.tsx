import React from "react";

const Overlay = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.23) 38.02%, rgba(29, 29, 29, 0.72) 64.06%, rgba(29, 29, 29, 0.95) 100%)",
      }}
      aria-hidden="true"
    />
  );
};

export default Overlay;
