import "./index.css"; 
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import { Details } from "./components/Details";
import Home from "./components/Home";



function App() {
  return (
    <>
      <MainPage />
      <Routes>
        <Route path='/Recipe_finder/' element={<Home/>}/>
        <Route path="/Recipe_finder/search" element={<Search />} />
        <Route path="/Recipe_finder/details" element={<Details/>} />
      </Routes>
   </>
  );
}

export default App;
