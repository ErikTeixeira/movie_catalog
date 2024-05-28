import { useState, useEffect } from "react";
// permite pegar a query string da url e usar como quiser
import { useSearchParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY; 

import "../Home/MoviesGrid.css";

const Search = () => {

    // envolve em array para destruturar e pegar a primeira searchParams
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState( [] );

    // pega o valor do q da url
    const query = searchParams.get("q");


    const getSearchedMovies = async (url) => {
        
        const response = await fetch(url);
        const data = await response.json();

        setMovies(data.results);
    }

    // colocou -> [query]  para que sempre que mudar o query o useEffect roda
    useEffect( () => {
        
        const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}&language=pt-BR`;

        getSearchedMovies(searchWithQueryUrl);

    }, [query] )


    return (
        <div className="container" >
            <h2 className="title">
                Resultados para: <span className="query-text"> {query} </span> 
            </h2>

            <div className="movies-container">
                {movies.length === 0 && <p>Loading...</p>}

                {/* se for maior que 0, imprime os titulos */}
                {movies.length > 0 && movies.map( 
                    (movie) => <MovieCard key={movie.id} movie={movie} /> 
                ) }
            </div>
        </div>
    );
}

export default Search;