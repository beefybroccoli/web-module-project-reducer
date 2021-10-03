import React from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
//Within App.js, import the useReducer hook, our application's reducer and initialState object
import { useReducer } from "react";
import reducer, { initialState } from "./reducers/index";
import { applyNumber } from "./actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            {/* Replace "0" with a reference to `state.total` when passing a value to our TotalDisplay component. */}
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                {/* Replace "X" with a reference to `state.operation` within the operation element. */}
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                {/* Replace "0" with a reference  to `state.memory` within the memory element. */}
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              {[1, 2, 3].map((each) => {
                return (
                  <CalcButton
                    value={each}
                    onClick={() => {
                      dispatch(applyNumber(3));
                    }}
                  />
                );
              })}
            </div>

            <div className="row">
              {[4, 5, 6].map((each) => {
                return (
                  <CalcButton
                    value={each}
                    onClick={() => {
                      dispatch(applyNumber(3));
                    }}
                  />
                );
              })}
            </div>

            <div className="row">
              {[7, 8, 9].map((each) => {
                return (
                  <CalcButton
                    value={each}
                    onClick={() => {
                      dispatch(applyNumber(3));
                    }}
                  />
                );
              })}
            </div>

            <div className="row">
              {["+", "*", "-"].map((each) => {
                return <CalcButton value={each} onClick={() => {}} />;
              })}
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
