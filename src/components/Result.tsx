import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ResultProps {
  user: string;
  score: number;
  totalQs: number;
}

const Result = ({ user, score, totalQs }: ResultProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);
  return (
    <div className="box-sm md:box-lg">
      <h1 className="text-center text-slate-800 text-2xl md:text-4xl font-bold">
        {score > 20 ? "Well Done" : "Nice Try"}{" "}
        <span className="text-blue-800 capitalize">{user}</span>!
      </h1>
      <h3 className="text-lg md:text-2xl text-center">
        You have finished the quiz
      </h3>
      <p className="text-lg md:text-xl text-center">
        You Scored:{" "}
        <span className="text-2xl md:text-4xl text-blue-800 font-semibold">
          {score}
        </span>{" "}
        out of{" "}
        <span className="text-2xl md:text-4xl text-slate-800 font-semibold">
          {totalQs}
        </span>
      </p>
      <Link
        to="/"
        className="text-blue-500 bg-slate-800 px-4 py-2 shadow-xl rounded-md hover:scale-105 hover:text-blue-300 transition-all duration-300"
      >
        Click to Play Again
      </Link>
    </div>
  );
};
export default Result;
