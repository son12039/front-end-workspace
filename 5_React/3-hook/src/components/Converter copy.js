import { useState, useRef, useEffect } from "react";
import Btn from "./Btn";
const Converter = () => {
  return (
    <>
      <h1>Time Converter</h1>
      <label>Minutes : </label>
      <input id="aa" placeholder="Minutes" />
      <h1></h1>
      <label>Hours : </label>
      <input id="bb" placeholder="Hours" disabled />
      <h1></h1>
      <Btn text="Reset" />
      <Btn text="H>M" />
    </>
  );
};

export default Converter;
