import React from "react";
import Step from "./step/step";
const steps = [
  { label: "1. Choose number", path: "/choose-number" },
  { label: "2. Create Account", path: "/create-account" }
];
export default function Steps() {
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <ul className="list-unstyled funnel-steps d-flex flex-row justify-content-center">
          {steps.map(item => (
            <Step {...item}></Step>
          ))}
        </ul>
      </div>
    </div>
  );
}
