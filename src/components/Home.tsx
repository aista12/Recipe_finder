import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[url('./assets/imgg1.webp')] bg-cover h-[85vh] overflow-hidden">
      <div className="bg-[#00000067] h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-white p-8 max-w-2xl">
          Find Recipes up to your mood, taste, and culture!
        </h1>
        <Link to="/search">
          <button className="bg-green-500 text-white text-xl font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-green-800 transition duration-300">
            Click here to Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
