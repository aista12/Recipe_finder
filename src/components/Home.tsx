import Navbar from "./Navbar";
import Search from "./Search";
import Vegs from "./Vegs";
import * as React from 'react'; 


function Home() {
  return (
    <div className="relative">
      <Vegs />
      <Navbar />
      <Search />
    </div>
  );
}

export default React.memo(Home);
