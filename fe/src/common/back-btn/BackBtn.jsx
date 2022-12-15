import React from "react";
import { Link } from "react-router-dom";

import "./back-btn.css";

const BackBtn = () => {
  return (
    <Link to="/">
      <img
        className="back-btn__image"
        src="/icons/back-btn.png"
        alt="back-button"
      />
    </Link>
  );
};

export default BackBtn;
