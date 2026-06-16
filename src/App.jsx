import { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";
import Quiz from "./components/Quiz";
import blobOne from "./assets/blob-one.png";
import blobTwo from "./assets/blob-two.png";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [isQuizEnded, setQuizEnded] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    if (isQuizStarted)
      fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple",
      )
        .then((response) => response.json())
        .then((data) => {
          const newData = data.results.map((q) => {
            return {
              question: q.question,
              choicesArr: [q.correct_answer, ...q.incorrect_answers].sort(
                () => Math.random() - 0.5,
              ),
              correct: q.correct_answer,
            };
          });
          setQuiz(() => newData);
        })
        .catch((err) => console.error(err));

    return () => controller.abort();
  }, [isQuizStarted, quiz]);

  const quizElements = [
    quiz.map((que, i) => (
      <Quiz
        key={i}
        id={i + 1}
        {...que}
        isQuizEnded={isQuizEnded}
        increaseScore={setScore}
      />
    )),
  ];
  return (
    <main className="main">
      {!isQuizStarted && (
        <IntroPage handleClick={() => setIsQuizStarted(true)} />
      )}
      {isQuizStarted && quizElements}
      {isQuizStarted && quiz.length > 0 && !isQuizEnded && (
        <button
          className="start-quiz-btn check-btn"
          onClick={() => setQuizEnded((prev) => !prev)}
        >
          Check answers
        </button>
      )}
      {isQuizEnded && (
        <section>
          <p>
            You scored {score}/{quiz.length} correct answers
          </p>
          <button
            className="start-quiz-btn"
            onClick={() => {
              setQuiz([]);
              setQuizEnded((prev) => !prev);
              setScore(0);
            }}
          >
            Play Again
          </button>
        </section>
      )}
      <img src={blobOne} alt="" className="blob-one" />
      <img src={blobTwo} alt="" className="blob-two" />
    </main>
  );
}

export default App;
