import { useState } from "react";
import IntroPage from "./IntroPage";
import Quiz from "./Quiz";
import blobOne from "./assets/blob-one.png";
import blobTwo from "./assets/blob-two.png";

function App() {
  const [isQuizStarted, setIsQuizStart] = useState(false);
  return (
    <main className="main">
      {!isQuizStarted && <IntroPage handleClick={() => setIsQuizStart(true)} />}
      {isQuizStarted && <Quiz />}
      <img src={blobOne} alt="" className="blob-one" />
      <img src={blobTwo} alt="" className="blob-two" />
    </main>
  );
}

export default App;
