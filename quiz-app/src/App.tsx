import "./App.css";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { fetchQuizQuestions } from "./api";
import { Difficulty } from "./api";

import { useState } from "react";

const TOTAL_QUESTİONS = 10;

const App: React.FC = () => {
  const [Loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTİONS,Difficulty.EASY));

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1>React QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Quesitons...</p>
      {/*<QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTİONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
       ></QuestionCard>*/}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
