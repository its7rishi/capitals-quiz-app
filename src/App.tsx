import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  const [user, setUser] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [totalQs, setTotalQs] = useState<number>(0);
  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col items-center justify-center p-8">
      <Router>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route
            path="/questions"
            element={
              <Questions
                user={user}
                score={score}
                setScore={setScore}
                setTotalQs={setTotalQs}
              />
            }
          />
          <Route
            path="/result"
            element={<Result user={user} score={score} totalQs={totalQs} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
