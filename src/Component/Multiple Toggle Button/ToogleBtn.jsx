import React from "react";
import { useState } from "react";

const ToogleBtn = () => {
  const [type, setType] = useState("generel");
  const toggle = (value) => {
    setType(value);
  };
  return (
    <>
      <div className="mt-3">
        <button
          className="btn btn-primary m-2"
          onClick={() => toggle("generel")}
        >
          Generel
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => toggle("army")}
        >
          Army
        </button>
        <button
          className="btn btn-warning m-2"
          onClick={() => toggle("police")}
        >
          Police
        </button>
        <button className="btn btn-info m-2" onClick={() => toggle("spy")}>
          Spy
        </button>
      </div>
      <div>
        {type === "generel" && <div>I am Generel Division</div>}
        {type === "army" && <div>I am Army Division</div>}
        {type === "police" && <div>I am Police Division</div>}
        {type === "spy" && <div>I am Spy Division</div>}
      </div>
    </>
  );
};

export default ToogleBtn;
