import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Funtions = ({ onContentClear, OnDelete }) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHander={onContentClear} />
        <Button text="R" clickHander={OnDelete} />
    </section>
)

Funtions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    OnDelete: PropTypes.func.isRequired
}

export default Funtions;