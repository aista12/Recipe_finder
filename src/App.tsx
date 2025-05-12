import "./index.css";
// import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
// import Search from "./components/Search";
import { Details } from "./components/Details";
import Home from "./components/Home";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Bookmarks from "./components/Bookmarks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Recipe_finder/" element={<Home />} />
        {/* <Route path="/Recipe_finder/search" element={<Search/>} /> */}
        <Route path="/Recipe_finder/details" element={<Details />} />
        <Route path="/Recipe_finder/register" element={<Register />} />
        <Route path="/Recipe_finder/profile" element={<Profile />} />
        <Route path="/Recipe_finder/bookmark" element={<Bookmarks />} />
      </Routes>
    </>
  );
}

export default App;
