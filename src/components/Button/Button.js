import React from "react";
import './Button.css'

const Button = ({ handleNoteSave }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={handleNoteSave}>Add</button>
    </div>
  );
};

export default Button;
