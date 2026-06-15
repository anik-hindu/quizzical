function IntroPage({ handleClick }) {
  return (
    <section className="intro">
      <h1 className="intro-title">Quizzical</h1>
      <p className="intro-desc">Find out how smart you are</p>
      <button className="start-quiz-btn" onClick={handleClick}>
        Start Quiz
      </button>
    </section>
  );
}

export default IntroPage;
