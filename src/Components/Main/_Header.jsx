import React from "react";
import { FaRegBell, FaUserCircle } from "react-icons/fa";

const _Header = () => {
  return (
    <div className="main-header">
      <div className="main-header-text">
        <h1>Рабочие задания</h1>
      </div>
      <div className="main-header-icons">
        <span>
          <FaRegBell />
        </span>
        <span>
          <FaUserCircle />
        </span>
      </div>
    </div>
  );
};

export default _Header;
