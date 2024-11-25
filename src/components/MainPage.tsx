import mainLogo from "../assets/logo-simple-framed-green-gradient.svg";
import { Navbar } from "./Navbar";

function MainPage() {
  return (
    <>
      <header className=" flex items-center justify-around p-4 bg-green-500">
        <img src={mainLogo} alt="Spoonacular Logo" className="h-12 w-12" />
        <nav>
          <Navbar />
        </nav>
      </header>
    </>
  );
}

export default MainPage;
