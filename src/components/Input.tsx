// // import React from "react";

// interface InputProps {
//   searchTerm: string;
//   setSearchTerm: (term: string) => void;
//   setDebouncedSearchTerm: (term: string) => void;
// }

// function Input({ searchTerm, setSearchTerm, setDebouncedSearchTerm }: InputProps) {
//   const handleSearch = () => {
//     setDebouncedSearchTerm(searchTerm);
//   };

//   return (
//     <div className="p-4 text-center">
//       <input
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
//         className="border border-gray-300 rounded p-2"
//         placeholder="Search for recipes..."
//       />
//       <button
//         onClick={handleSearch}
//         className="ml-2 p-2 bg-green-500 text-white rounded"
//       >
//         Search
//       </button>
//     </div>
//   );
// }

// export default Input;