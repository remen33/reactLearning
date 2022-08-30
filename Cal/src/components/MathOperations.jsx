import React from 'react'
import PropTypes from "prop-types"
import Button from "./Button";

const MathOperations = ({ onClickOperation, onClickEquals }) => (
    <section className="math-operations">
        <Button text="+" clickHander={onClickOperation} />
        <Button text="-" clickHander={onClickOperation} />
        <Button text="*" clickHander={onClickOperation} />
        <Button text="/" clickHander={onClickOperation} />
        <Button text="=" clickHander={onClickEquals} />
    </section>
)

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEquals: PropTypes.func.isRequired,
}

export default MathOperations