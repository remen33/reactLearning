import React, { useState } from "react";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import './App.css';
import Funtions from "./components/Functions";
import Numbers from "./components/Numbers";

const App = () => {

    let [stack, setStack] = useState("");
    return (
        <main className="react-calculator">
            <Result value={stack} />
            <Numbers onClickNumber={number => {
                setStack(`${stack}${number}`)
            }
            } />
            <Funtions OnDelete={deleted => {
                if (stack.length > 0) {
                    const newStact = stack.substring(0, stack.length - 1)
                    setStack(newStact)
                }
            }}
                onContentClear={clear => setStack("")} />
            <MathOperations
                onClickOperation={operation => {
                    setStack(`${stack}${operation}`)
                }
                }
                onClickEquals={equals => {
                    setStack(`${stack}${equals}`)
                }} />
        </main>)
}

export default App