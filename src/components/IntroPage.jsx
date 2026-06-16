function IntroPage({ handleClick }) {
  return (
    <section className="intro">
      <h1 className="intro-title">Quizzical</h1>
      <p className="intro-desc">Test your computer science IQ.</p>
      <button className="start-quiz-btn" onClick={handleClick}>
        Start Quiz
      </button>
    </section>
  );
}

export default IntroPage;
