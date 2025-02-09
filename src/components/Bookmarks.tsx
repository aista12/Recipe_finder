
import chef from "../assets/chefBook.svg";
import Navbar from "./Navbar";

function Bookmarks() {
  return (
    <div className="h-screen">
      <Navbar />

      {/* bookmark */}
      <div className=" flex flex-col items-center  p-10 gap-4 border  overflow-hidden">
        <h1 className="flex text-3xl justify-center font-bold ">Bookmark</h1>
        {localStorage.getItem("bookmark") === null ? (
          <p className="justify-items-center h-[50%] w-[33%] ">
            <img src={chef} alt="chef" className=" w-[100%] h-[100%] " />
            There will be your saved recipes.
          </p>
        ) : (
          <p>{localStorage.getItem("bookmark")}</p>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
