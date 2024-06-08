import React, { useState } from "react";
import CalcButton from "./CalcButton";
import "./Calculator.css";

const Calculator = () => {
  const [calc, setCalc] = useState({
    current: "",
    total: "0",
    operator: "",
  });

  function handleNumber(value) {
    let newValue = calc.current + value;
    setCalc((prevCalc) => ({
      ...prevCalc,
      current: newValue,
    }));
  }

  function Calculate() {
    let total = parseInt(calc.total);
    if (calc.operator === "+") {
      total += parseInt(calc.current);
    } else if (calc.operator === "-") {
      total -= parseInt(calc.current);
    } else if (calc.operator === "*") {
      total *= parseInt(calc.current);
    } else if (calc.operator === "/") {
      total /= parseInt(calc.current);
      total = total.toFixed(6)
    } else {
      total = parseInt(calc.current);
    }
    return total;
  }

  function handleOperator(value) {
    if (value === "=") {
      const total = Calculate();
      setCalc({
        current: total.toString(),
        total: total.toString(),
        operator: "",
      });
    } else {
      if (calc.current !== "") {
        const total = Calculate();
        setCalc({
          current: "",
          total: total.toString(),
          operator: value,
        });
      } else {
        setCalc((prevCalc) => ({
          ...prevCalc,
          operator: value,
        }));
      }
    }
  }

  function display() {
    return calc.current || calc.total;
  }

  function handleClear() {
    setCalc({
      current: "",
      total: "0",
      operator: "",
    });
  }

  return (
    <div className="container">
      <div className="display">{display()}</div>
      <div className="calculator">
        <CalcButton value="7" onClick={handleNumber} />
        <CalcButton value="8" onClick={handleNumber} />
        <CalcButton value="9" onClick={handleNumber} />
        <CalcButton
          className="operator"
          value="/"
          onClick={handleOperator}
        />

        <CalcButton value="4" onClick={handleNumber} />
        <CalcButton value="5" onClick={handleNumber} />
        <CalcButton value="6" onClick={handleNumber} />
        <CalcButton
          className="operator"
          value="*"
          onClick={handleOperator}
        />

        <CalcButton value="1" onClick={handleNumber} />
        <CalcButton value="2" onClick={handleNumber} />
        <CalcButton value="3" onClick={handleNumber} />
        <CalcButton
          className="operator"
          value="-"
          onClick={handleOperator}
        />

        <CalcButton className="operator" value="C" onClick={handleClear} />
        <CalcButton value="0" onClick={handleNumber} />
        <CalcButton
          className="operator"
          value="="
          onClick={handleOperator}
        />
        <CalcButton
          className="operator"
          value="+"
          onClick={() => handleOperator("+")}
        />
      </div>
    </div>
  );
};

export default Calculator;
