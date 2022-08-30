import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ type, text, clickHander }) => (
    <button className={type} onClick={() => clickHander(text)}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHander: PropTypes.func.isRequired
}

export default Button