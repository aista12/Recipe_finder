import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Details = () => {
  const [ingredients, setIngredients] = useState<
    { ingredient: string; measure: string }[]
  >([]);
  const [video, setVideos] = useState<any[]>([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const image = searchParams.get("image");
  const title = searchParams.get("title");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        const meal = res.data.meals?.[0];
        if (meal) {
          const ingredientsList = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient) {
              ingredientsList.push({ ingredient, measure });
            }
          }
          setIngredients(ingredientsList);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const youtubeVideos = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            q: `${title} recipe`,
            key: "AIzaSyDAK07clyUpmErhjBsfhewTdFDmN2huSSk",
            maxResults: 6,
            type: "video",
          },
        }
      );
      console.log(response)
      setVideos(response.data.items);
    };
    if(title){
      youtubeVideos();
    }
  }, [id]);
  return (
    <>
      <div className=" p-10 lg:flex-row lg:gap-[15vw] lg:px-[10vw] bg-[url('./assets/img4.jpeg')] bg-cover bg-center ">
        <div className="bg-[#000000a0] flex flex-col p-10 lg:flex-row lg:gap-[8vw] lg:px-[8vw]">
          <div>
            {image && (
              <img
                src={image}
                className=" object-cover p-5 rounded lg:h-[60vh] lg:w-[50vw] "
              />
            )}
            <h1 className="text-5xl font-semibold m-5 text-cyan-100">
              {title}
            </h1>
          </div>
          <div className=" text-cyan-100  bg-cover  mt-5 lg:w-[65vh] lg:h-[80%] lg:mt-[3vh]  pt-10 p-10 items-center bg-[#000000a0]">
            <h2 className="text-3xl font-medium mb-3 ">Ingredients:</h2>
            <hr className="my-4"></hr>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index} className="mb-2">
                  <strong>{item.ingredient}</strong>: {item.measure}
                </li>
              ))}
              <a href="#tutorial" className="text-blue-600 mt-5">Click here to see cooking tutorials..</a>
            </ul>
            </div>
            </div>
            <div className="bg-[#000000a0] text-white mt-5 flex-col p-20" >
              <h2 className="text-2xl font-semibold mt-2" id="tutorial">Cooking tutorial:</h2>
              <hr className="my-3" />
              <div className="mt-5 w-[30wv] h-[50%] grid grid-cols-1 md:grid-cols-3 gap-5">
                {video.length > 0 ? (
                  video.map((video) => (
                    <div key={video.id.videoId} className="mb-4">
                      <h3 className="text-lg font-bold">
                        {video.snippet.title}
                      </h3>
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))
                ) : (
                  <p>No videos found.</p>
                )}
              </div>
            </div>
        </div>
    </>
  );
};
