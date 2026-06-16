import { decode } from "html-entities";
import { useEffect, useState } from "react";

function Quiz({
  question,
  choicesArr,
  id,
  isQuizEnded,
  correct,
  increaseScore,
}) {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    isQuizEnded &&
      selected === correct &&
      increaseScore((prevScore) => prevScore + 1);
  }, [increaseScore, selected, correct, isQuizEnded]);
  return (
    <article className="quiz-container">
      <h2 className="quiz-question">
        {id}. {decode(question)}
      </h2>
      <div className="choices-container">
        {choicesArr.map((choice, index) => {
          let className = "quiz-choice";
          const isCorrect = choice === correct;
          const isSelected = choice === selected;

          if (isSelected && !isQuizEnded) {
            className += " selected-choice";
          }

          if (isQuizEnded && isCorrect && isSelected) {
            className += " correct";
          }

          if (isQuizEnded && isCorrect && !isSelected) {
            className += " correct";
          }

          if (isQuizEnded && !isCorrect && isSelected) {
            className += " wrong disabled";
          }

          if (isQuizEnded && !isSelected && !isCorrect) {
            className += " disabled";
          }

          return (
            <button
              key={index}
              onClick={() => {
                setSelected(choice);
              }}
              className={className}
              disabled={isQuizEnded}
            >
              {decode(choice)}
            </button>
          );
        })}
      </div>
      <div className="line"></div>
    </article>
  );
}

export default Quiz;
