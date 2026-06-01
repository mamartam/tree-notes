import { useState } from "react";
import WorkPanel from "./WorkPanel";
import Element from "./Element";

function NavigationTree({ data, onNoteSelect }) {
  return (
    <>
      {data.map((item) => (
        <Element key={item.id} data={item} onNoteSelect={onNoteSelect} />
      ))}
    </>
  );
}

export default NavigationTree;
