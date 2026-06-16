import { useEffect, useState } from "react";
import IntroPage from "./IntroPage";
import Quiz from "./Quiz";
import blobOne from "./assets/blob-one.png";
import blobTwo from "./assets/blob-two.png";

function App() {
  const [isQuizStarted, setIsQuizStart] = useState(false);
  const [quiz, setQuiz] = useState([]);

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
        });

    return () => controller.abort();
  }, [isQuizStarted]);

  return (
    <main className="main">
      {!isQuizStarted && <IntroPage handleClick={() => setIsQuizStart(true)} />}
      {isQuizStarted && (
        <>
          {quiz.map((que, i) => (
            <Quiz key={i} id={i + 1} {...que} />
          ))}
        </>
      )}
      {isQuizStarted && quiz.length > 0 && (
        <button className="start-quiz-btn check-btn">Check answers</button>
      )}
      <img src={blobOne} alt="" className="blob-one" />
      <img src={blobTwo} alt="" className="blob-two" />
    </main>
  );
}

export default App;
