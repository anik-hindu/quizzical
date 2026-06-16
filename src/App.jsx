import { useState } from "react";
import blobOne from "./assets/blob-one.png";
import blobTwo from "./assets/blob-two.png";
import IntroPage from "./components/IntroPage";
import LoadingState from "./components/LoadingState";
import Quiz from "./components/Quiz";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [isQuizEnded, setQuizEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple",
      );
      const data = await response.json();
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
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const quizElements = isQuizStarted && [
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
        <IntroPage
          handleClick={() => {
            setIsQuizStarted(true);
            handleFetchClick();
          }}
        />
      )}
      {quizElements}
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
              handleFetchClick();
            }}
          >
            Play Again
          </button>
        </section>
      )}

      {isLoading && <LoadingState />}
      <img src={blobOne} alt="" className="blob-one" />
      <img src={blobTwo} alt="" className="blob-two" />
    </main>
  );
}

export default App;
