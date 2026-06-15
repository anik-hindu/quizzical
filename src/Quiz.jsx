function Quiz({ question, choicesArr }) {
  return (
    <article className="quiz-container">
      <h2 className="quiz-question">{question}</h2>
      <div className="choices-container">
        {choicesArr.map((choice, index) => (
          <button key={index} className="quiz-choice">
            {choice}
          </button>
        ))}
      </div>
      <div className="line"></div>
    </article>
  );
}

export default Quiz;
