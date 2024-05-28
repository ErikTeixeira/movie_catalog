import { useState, useEffect } from "react";
// uso para pegar o valor da url
import { useParams } from "react-router-dom";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
  } from "react-icons/bs";

import MovieCard from "../../components/MovieCard"

import "./Movie.css";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {

    // pegar o id da url -> desestruturar o objeto e usar o hook
    // <Route path='movie/:id' element={ <Movie /> } />
    const {id} = useParams();

    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        // não precisa do results
        setMovie(data);
    }

    useEffect( () => {
        
        const topRatedUrl = `${moviesUrl}${id}?${apiKey}&language=pt-BR`;

        getMovie(topRatedUrl);
    }, [] )

    return (
        <div className="movie-page" >
            {movie && <> 
            
                <MovieCard movie={movie} showLink={false} />
                <p className="tagline" > {movie.tagline} </p>

                <div className="info" >
                    <h3>
                        <BsWallet2 /> Orçamento:
                    </h3>
                    <p> {movie.budget} </p>
                </div>

                <div className="info" >
                    <h3>
                        <BsGraphUp /> Receita:
                    </h3>
                    <p> {movie.revenue} </p>
                </div>

                <div className="info" >
                    <h3>
                        <BsHourglassSplit /> Duração
                    </h3>
                    <p> {movie.runtime} minutos </p>
                </div>

                <div className="info description" >
                    <h3>
                        <BsFillFileEarmarkTextFill /> Descrição
                    </h3>
                    <p> {movie.overview} minutos </p>
                </div>
            </>}
        </div>
    );
}

export default Movie;