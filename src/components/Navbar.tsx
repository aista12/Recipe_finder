import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex space-x-4">
      <Link to={"/"} className="text-[#084309] hover:text-[#08660a]">
        Home
      </Link>
      <Link to={"/search"} className="text-[#084309] hover:text-[#08660a]">
        Search
      </Link>
    </nav>
  );
};
