import { decode } from "html-entities";
import { useState } from "react";

function Quiz({ question, choicesArr, id }) {
  const [selected, setSelected] = useState(null);
  return (
    <article className="quiz-container">
      <h2 className="quiz-question">
        {id}. {decode(question)}
      </h2>
      <div className="choices-container">
        {choicesArr.map((choice, index) => (
          <button
            key={index}
            onClick={() => setSelected(choice)}
            className={
              selected === choice
                ? "quiz-choice selected-choice"
                : "quiz-choice"
            }
          >
            {decode(choice)}
          </button>
        ))}
      </div>
      <div className="line"></div>
    </article>
  );
}

export default Quiz;
