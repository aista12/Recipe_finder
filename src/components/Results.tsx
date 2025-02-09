// import { useEffect, useState, useTransition } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// interface Recipe {
//   id: number;
//   title: string;
//   image: string;
// }

// function Results({ debouncedSearchTerm }) {
//   const [searchResults, setSearchResults] = useState<Recipe[]>([]);
//   const [waiting, startTransation] = useTransition();

//   useEffect(() => {
//     // if(!apiKey)return
//     startTransation(() => {
//       axios
//         .get(
//           `https://api.spoonacular.com/recipes/complexSearch?apiKey=dcbdf40c309f4319aeb314638a65405b&query=${debouncedSearchTerm}`,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//             // params: {
//             //   apiKey: apiKey,
//             //   query: {debouncedSearchTerm}
//             // },
//           }
//         )
//         .then((res) => {
//           setSearchResults(
//             res.data.results?.map((meals: any) => ({
//               id: meals.id,
//               title: meals.title,
//               image: meals.image,
//             })) || []
//           );
//         })
//         .catch((err) => {
//           //TODO tell the user about the error
//           // window.location.replace('/');
//           console.log(err);
//         });
//     });
//   }, [debouncedSearchTerm]);

//   return waiting == false ? (
//     <div className="p-10">
//       {searchResults.length > 0 ? (
//         <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-3 ">
//           {searchResults.map((recipe) => (
//             <Link
//               key={recipe.id}
//               to={
//                 "/Recipe_finder/details?id=${recipe.id}&image=${recipe.image}&title=${recipe.title}"
//               }
//               className="text-white hover:text-white"
//             >
//               <li
//                 key={recipe.id}
//                 className="border bg-[#0008] p-4 rounded shadow"
//               >
//                 <img
//                   src={recipe.image}
//                   alt={recipe.title}
//                   className="w-full h-40 object-cover mb-2 rounded"
//                 />
//                 <h3 className="text-lg font-semibold">{recipe.title}</h3>
//               </li>
//             </Link>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-[#000] text-3xl text-center mt-9 mb-24">
//           {" "}
//           {[]} Try to search something else{" "}
//         </p>
//       )}
//     </div>
//   ) : (
//     <div className="flex justify-center items-center h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#000]">
//         Loading...
//       </div>
//     </div>
//   );
// }

// export default Results;

