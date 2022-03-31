import { useEffect, useState, useId } from "react";
import axios from "axios";
import { Question } from "./Question";
import he from "he";

const QuestionList = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  const questId = useId();

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
      .then((response) => setQuestions(response.data.results));
  }, [id]);
  console.log(questions[0]?.type);
  return (
    <div>
      {questions.map((question, index) => {
        if (index === 0) {
          return (
            <div key={questId}>
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
          );
        }
        return null;
      })}
    </div>
  );
};

export { QuestionList };
