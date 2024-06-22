import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import "./MovieCard.css";


const imgUrl = import.meta.env.VITE_IMG;

const MovieCard = ( {movie, movieImage, showLink = true} ) => {

  // desestruturação
  const { id, backdrop_path, poster_path, title, vote_average } = movie;

  const imagePath = movieImage === "backdrop_path" ? backdrop_path : poster_path;

  return (
    <div className="movie-card">

      <img src={`${imgUrl}${imagePath}`} alt={title} />

      <div className="movie-card-content">

        <h2>{title}</h2>

        <p>
          <FaStar /> {vote_average}
        </p>
        
        {showLink && <Link to={`/movie/${id}`}>Detalhes</Link>}

      </div>
    </div>
  )
}

export default MovieCard;
