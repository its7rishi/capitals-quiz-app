import { useEffect, useState } from "react";
import Header from "./Header";
import { states } from "../data/data";
import { useNavigate } from "react-router-dom";

interface QuestionsProps {
  user: string;
  score: number;
  setScore: (score: number) => void;
  setTotalQs: (total: number) => void;
}

type data = {
  id: number;
  name: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;
  isCompleted: boolean;
};

const initialData = states;

function Questions({ user, score, setScore, setTotalQs }: QuestionsProps) {
  // const [score, setScore] = useState<number>(0);
  const [data, setData] = useState(initialData);
  const [qIndex, setQIndex] = useState<number>(0);
  const [currentQ, setCurrentQ] = useState<data>(data[qIndex]);
  const [review, setReview] = useState<string>("");
  const [choice, setChoice] = useState<string | null>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  function randomiseData() {
    for (let i = initialData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialData[i], initialData[j]] = [initialData[j], initialData[i]];
    }
    setData(initialData);
  }

  const handleOptionClick = (e: React.MouseEvent<HTMLElement>) => {
    const input = e.target as HTMLElement;
    setChoice(input.textContent);
  };

  const handleCheck = () => {
    setIsSubmitted(true);
    if (
      choice &&
      choice?.toLowerCase() === currentQ.correctAnswer.toLowerCase()
    ) {
      setScore((score += 1));
      setReview("Correct");
    } else if (
      choice &&
      choice?.toLowerCase() !== currentQ.correctAnswer.toLowerCase()
    ) {
      setReview("Wrong");
    } else {
      setReview("");
    }
  };

  const handleNext = () => {
    setReview("");
    setIsSubmitted(false);
    setChoice("");

    if (qIndex >= data.length - 1) {
      navigate("/result");
    } else {
      setQIndex((prev) => (prev += 1));
    }
  };

  useEffect(() => {
    randomiseData();
    setTotalQs(initialData.length);
  }, [setTotalQs]);

  useEffect(() => {
    setCurrentQ(data[qIndex]);
  }, [data, qIndex]);

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="q-box-sm md:q-box-md relative">
      <Header user={user} score={score} />

      <div className="mt-2 pt-8 flex flex-col items-center justify-center gap-6 ">
        <h2 className="text-center font-bold text-lg md:text-xl">
          What is the Capital of
        </h2>
        <h2 className="text-center font-bold text-lg md:text-xl">
          {currentQ.name} <span>?</span>
        </h2>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-x-2 gap-y-4 md:gap-x-4 md:gap-y-8">
          <button
            className={`option-btn ${
              choice?.toLowerCase() === currentQ.option1.toLowerCase()
                ? "bg-blue-800"
                : "bg-slate-800"
            }`}
            onClick={(e) => handleOptionClick(e)}
            disabled={isSubmitted}
          >
            {currentQ.option1}
          </button>
          <button
            className={`option-btn ${
              choice?.toLowerCase() === currentQ.option2.toLowerCase()
                ? "bg-blue-800"
                : "bg-slate-800"
            }`}
            onClick={(e) => handleOptionClick(e)}
            disabled={isSubmitted}
          >
            {currentQ.option2}
          </button>
          <button
            className={`option-btn ${
              choice?.toLowerCase() === currentQ.option3.toLowerCase()
                ? "bg-blue-800"
                : "bg-slate-800"
            }`}
            onClick={(e) => handleOptionClick(e)}
            disabled={isSubmitted}
          >
            {currentQ.option3}
          </button>
          <button
            className={`option-btn ${
              choice?.toLowerCase() === currentQ.option4.toLowerCase()
                ? "bg-blue-800"
                : "bg-slate-800"
            }`}
            onClick={(e) => handleOptionClick(e)}
            disabled={isSubmitted}
          >
            {currentQ.option4}
          </button>
        </div>
        <div className="w-full  p-2 grid grid-cols-3 gap-3 items-center shadow-xl">
          <p
            className={`${
              review.toLowerCase() === "correct"
                ? "text-green-700 text-sm md:text-normal"
                : "text-red-700 text-sm md:text-"
            } font-bold`}
          >
            {review} {review !== "" && <span>!!!</span>}
          </p>
          <button
            className="next-btn disabled:cursor-not-allowed"
            onClick={handleCheck}
            disabled={!choice || isSubmitted}
          >
            Check
          </button>
          <button
            className="next-btn disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={!isSubmitted}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Questions;
