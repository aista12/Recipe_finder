import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/logo-simple-framed-green-gradient.svg";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineBookmarks } from "react-icons/md";


function Navbar() {
  const username = JSON.parse(localStorage.getItem("username") || "null");
  const firstLetter = username?.charAt(0) || "U";
  const location = useLocation();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("username");
  //   localStorage.removeItem("email");
  //   localStorage.removeItem("password");
  //   navigate("/Recipe_finder/register");
  // };

  return (
    <nav className="flex justify-between bg-[#4ad66d] py-3 font-semibold px-16">
      <div className="flex items-center space-x-2">
        <Link to={"/Recipe_finder/"}>
          <img src={mainLogo} alt="Spoonacular Logo" className="h-12 w-12" />
        </Link>

        <Link
          to={"/Recipe_finder/"}
          className="text-[#f5f3f3] hover:text-[#08660a] font-bold "
        >
          Spooncular
        </Link>
      </div>

      <div className="flex items-center space-x-2 w-[60%] justify-between gap-4">
        <label className="w-[80%]">
          <input
            type="search"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            // onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
            className="w-[100%]  rounded-full px-4 ring-teal-500 outline-none flex items-center p-2"
            id="search"
            name="search"
            placeholder="Search"
          />
        </label>

        {username ? (
          <>
            {/* User Avatar with Link */}
            <Link to="/Recipe_finder/profile" title="Go to Profile">
              <div className="w-10 h-10 flex items-center justify-center bg-[#efeeee] text-green-600 hover:text-white rounded-full font-bold hover:bg-green-700">
                {firstLetter}
              </div>
            </Link>

            {/* Logout Button */}
            {/* <button
              onClick={handleLogout}
              className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button> */}
          </>
        ) : (
          <Link
            to={"/Recipe_finder/register"}
            className={`text-[#084309] hover:text-[#08660a] ${
              location.pathname === "/Recipe_finder/register"
                ? "font-bold underline"
                : ""
            }`}
          >
            Register
          </Link>
        )}
        <Link to="/Recipe_finder/bookmark" title="Go to Bookmarks">
          <MdOutlineBookmarks className="text-3xl text-white hover:text-green-700" />
        </Link>

        <IoLanguage className="text-3xl text-white " />
      </div>
    </nav>
  );
}

export default Navbar;
