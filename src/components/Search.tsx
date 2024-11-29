import { useEffect, useState, useTransition } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  title: string;
  image: string;
}

function Search() {
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(" ");
  const [waiting, startTransation] = useTransition();
  useEffect(() => {
    // if(!apiKey)return
    startTransation(() => {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=dcbdf40c309f4319aeb314638a65405b&query=${debouncedSearchTerm}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            // params: {
            //   apiKey: apiKey,
            //   query: {debouncedSearchTerm}
            // },
          }
        )
        .then((res) => {
          setSearchResults(
            res.data.results?.map((meals: any) => ({
              id: meals.id,
              title: meals.title,
              image: meals.image,
            })) || []
          );
        })
        .catch((err) => {
          //TODO tell the user about the error
          // window.location.replace('/');
          console.log(err);
        });
    });
  }, [debouncedSearchTerm]);

  const handleSearch = () => {
    setDebouncedSearchTerm(searchTerm);
  };

  return waiting == false ? (
    <>
      <div className="bg-[url('./assets/img6.jpg')] bg-repeat  relative ">
        <div className="bg-[#00000063]">
          <div className="flex flex-col p-20 items-center ">
            <label
              htmlFor="search"
              className="text-white font-mono block text-5xl mb-4 text-center"
            >
              What do you want on your table today?
            </label>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
              className="border border-green-300 rounded-md m-10 w-80 text-xl px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            />
            <button
              onClick={handleSearch}
              className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600"
            >
              Search
            </button>
          </div>
          <div className="p-10">
            {searchResults.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {searchResults.map((recipe) => (
                  <Link
                    key={recipe.id}
                    to={`/details?id=${recipe.id}&image=${recipe.image}&title=${recipe.title}`}
                    className="text-white hover:text-white"
                  >
                    <li
                      key={recipe.id}
                      className="border bg-[#0008] p-4 rounded shadow"
                    >
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-40 object-cover mb-2 rounded"
                      />
                      <h3 className="text-lg font-semibold">{recipe.title}</h3>
                    </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <p className="text-white text-3xl text-center mt-9 mb-24">
                {" "}
                {[]} Try to search something else{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="bg-[url('./assets/imgg1.webp')] bg-cover h-[85vh] overflow-hidden">
      <h1>waiting</h1>
    </div>
  );
}

export default Search;