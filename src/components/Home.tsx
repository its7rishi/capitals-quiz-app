import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

useNavigate;

interface HomeProps {
  user: string;
  setUser: (value: string) => void;
}

function Home({ user, setUser }: HomeProps) {
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/questions");
  };

  useEffect(() => {
    setUser("");
  }, [setUser]);

  return (
    <div className="box-sm md:box-lg">
      <h1 className="heading-small md:heading-big">Welcome to the Quiz App</h1>
      <h2 className="h2-small md:h2-big">Guess the capitals</h2>
      <p className="p-big">Enter your name to continue</p>
      <form
        className="p-2 flex items-center justify-center gap-4 shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          pattern="^[a-zA-z]*$"
          title="Only alphabets without spaces allowed."
          className="input-sm md:input-lg"
          required
        />
        <button type="submit" className="submit-btn-sm md:submit-btn-lg">
          Let's Go!
        </button>
      </form>
    </div>
  );
}
export default Home;
