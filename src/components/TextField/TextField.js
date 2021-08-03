import React from "react";
import './TextField.css'

const Input = ({selectedText, handleTextChange, handeKeyPress}) => {
    return (
        <div className="input">
            <input
                className="form-control"
                value={selectedText}
                onChange={handleTextChange}
                onKeyPress={handeKeyPress}
                placeholder="Enter a Todo"
            />
        </div>
    );
};

export default Input;
