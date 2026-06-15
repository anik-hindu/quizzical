import { useState } from "react";
import IntroPage from "./IntroPage";
import Quiz from "./Quiz";
import blobOne from "./assets/blob-one.png";
import blobTwo from "./assets/blob-two.png";

function App() {
  const [isQuizStarted, setIsQuizStart] = useState(false);

  const questionsArr = [
    "What is My name?",
    "What I am learning currently? ",
    "What role I am seeking? ",
    "Where do I live? ",
    "What are you studying? ",
  ];
  const choices = [
    ["Anik", "Usme", "Shoham", "Hajbi"],
    ["React", "JavaScript", "Next.js", "Tailwind"],
    [
      "Front-End Engineer",
      "Backend Engineer",
      "Full-Stack Engineer",
      "Software Engineer",
    ],
    ["Bangladesh", "USA", "Germany", "Japan"],
    [
      "Bsc in Engineering",
      "Diploma in Enginering",
      "Msc in Engineering",
      "Phd",
    ],
  ];

  return (
    <main className="main">
      {!isQuizStarted && <IntroPage handleClick={() => setIsQuizStart(true)} />}
      {isQuizStarted && (
        <>
          {questionsArr.map((que, i) => (
            <Quiz key={i} question={que} choicesArr={choices[i]} />
          ))}
        </>
      )}
      {isQuizStarted && (
        <button className="start-quiz-btn check-btn">Check answers</button>
      )}
      <img src={blobOne} alt="" className="blob-one" />
      <img src={blobTwo} alt="" className="blob-two" />
    </main>
  );
}

export default App;
