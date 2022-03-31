import { useEffect, useState, useId } from "react";
import axios from "axios";

const Question = ({ id, correct_answer, incorrect_answers, question }) => {
  const questId = useId();

  return (
    <div id={id}>
      <ul id={questId}>
        <h4>{question}</h4>
        <li>A: {correct_answer}</li>
        <li>B: {incorrect_answers[0]}</li>
        <li>C: {incorrect_answers[1]} </li>
        <li>D: {incorrect_answers[2]}</li>
      </ul>
    </div>
  );
};
export { Question };
