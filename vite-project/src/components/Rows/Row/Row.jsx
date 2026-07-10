import React, { useEffect, useState } from "react";
import axios from "../../../utilis/axios";
import "./row.css";
import movieTrailer from 'movie-trailer'; 
import YouTube from "react-youtube";
//import RowList from "../RowList/RowList";
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
     (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log(error);
      }
    })

    ();
  }, [fetchUrl]);

  const handleClick = (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    movieTrailer(movie?.name || movie?.title || movie?.original_name)
      .then((url) => {
        console.log(url);

        const urlParams = new URLSearchParams(
          new URL(url).search
        );

        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  }
};

const opts={
  height:'300',
  width:"100%",
  playerVars:{
    autoplay:1,
  },
}
  return (
   <div className="row">
      <h2>{title}</h2>

       <div className="row_posters">
         {movies?.map((movie,index) => (
           <img onClick={()=>handleClick (movie)}
             key={index}
             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
             src={`${base_url}${
               isLargeRow ? movie.poster_path : movie.backdrop_path
             }`}
             alt={movie.name || movie.title}
           />
         ))}
       </div>
       <div style={{padding:'40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
       </div>
     </div>
   );
};

export default Row;