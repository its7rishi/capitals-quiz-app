interface HeaderProps {
  user: string;
  score: number;
}

function Header({ user, score }: HeaderProps) {
  return (
    <div className="flex items-center justify-between bg-white py-2 px-4 w-full absolute top-0 border-b shadow-xl z-10">
      <div className="text-xs md:text-xl font-semibold text-blue-800 capitalize">
        {user}
      </div>
      <div className="text-normal md:text-2xl font-bold">Capitals Quiz</div>
      <div className="text-xs md:text-xl font-semibold text-green-600">
        Score: <span>{score}</span>
      </div>
    </div>
  );
}
export default Header;
