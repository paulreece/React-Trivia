import { useEffect, useState, useId } from "react";
import axios from "axios";
import { Question } from "./Question";
import he from "he";

const QuestionList = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
      .then((response) => setQuestions(response.data.results));
  }, [id]);
  console.log(questions[0]?.type);
  return (
    <div>
      {questions[0]?.question}
      {questions[0]?.correct_answer}
      {questions[0]?.incorrect_answers}
      {questions.map((question, index) => (
        <div>
          <Question
            key={index}
            question={he.decode(question.question)}
            correct_answer={he.decode(question.correct_answer)}
            incorrect_answers={question.incorrect_answers.map(
              (incorrect_answer) =>
                (incorrect_answer = he.decode(incorrect_answer))
            )}
          />
        </div>
      ))}
    </div>
  );
};

export { QuestionList };
