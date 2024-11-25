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
        <Route path='/' element={<Home/>}/>
        <Route path="/search" element={<Search />} />
        <Route path="/details" element={<Details/>} />
      </Routes>
   </>
  );
}

export default App;
