import { useEffect, useState, useId } from "react";
import axios from "axios";
import { Question } from "./Question";
import he from "he";

const Category = ({ id, name, category }) => {
  return (
    <>
      <div key={id}>{name}</div>
    </>
  );
};

export { Category };

{
  /* // onClick={() => setSelectedCategory(category)}
// onClick={() => setSelectedId(id)} */
}
