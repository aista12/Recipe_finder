import { IoBookmark } from "react-icons/io5";

function BookmarkFunc() {
  const handleBookmark = () => {
    const id = localStorage.getItem("id");
    const image = localStorage.getItem("image");
    const title = localStorage.getItem("title");
    // const ingredients = localStorage.getItem("ingredients");

    if (id && image && title /* && ingredients */) {
      const bookmarkData = {
        id: id,
        image: image,
        title: title,
        // ingredients: ingredients,
      };

      localStorage.setItem("bookmark", JSON.stringify(bookmarkData));
      console.log("Bookmark saved:", bookmarkData);
    } else {
      console.error("Missing data for bookmarking.");
    }
  };

  return (
    <>
      <button
        onClick={handleBookmark}
        className="bg-[#4ad66d] text-white rounded-full p-2 hover:bg-[#08660a]"
        title="add to bookmarks"
      >
        <IoBookmark />
      </button>
    </>
  );
}

export default BookmarkFunc;
