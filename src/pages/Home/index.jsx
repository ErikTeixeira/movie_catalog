import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";

import "./MoviesGrid.css";

// buscar as variaveis do env
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [ topMovies, setTopMovies ] = useState( [] );
    const [ nowPlayingMovies, setNowPlayingMovies ] = useState( [] );
    const [ popularMovies, setPopularMovies ] = useState( [] );
    const [ upcomingMovies, setUpcomingMovies ] = useState( [] );

    const getTopRatedMovies = async (url) => {
        // O método fetch() é uma maneira moderna e mais flexível de fazer requisições de rede (como buscar dados de um servidor) em JavaScript. Ele permite que você recupere recursos de uma URL especificada, como JSON, imagens, HTML etc. Para usar o fetch() , você começa chamando-o com a URL do recurso que você deseja buscar.
        const response = await fetch(url);
        const data = await response.json();

        // está pegando apenas os results que tem os dados dos filmes, pois tem tem o page, results, total_pages, total_results
        setTopMovies(data.results);
    }

    // tem um array fazio no final pois isso acontece sempre que o componente e carregado
    useEffect( () => {
        
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;
        const nowPlayingUrl = `${moviesUrl}now_playing?${apiKey}&language=pt-BR`;
        const popularUrl = `${moviesUrl}popular?${apiKey}&language=pt-BR`;
        const upcomingUrl = `${moviesUrl}upcoming?${apiKey}&language=pt-BR`;

        getTopRatedMovies(topRatedUrl);

    }, [] )

    return (
        <div className="container" >
            <h2 className="title">Melhores Filmes:</h2>

            <div className="movies-container">
                {topMovies.length === 0 && <p>Loading...</p>}

                {/* se for maior que 0, imprime os titulos */}
                {topMovies.length > 0 && topMovies.map( 
                    (movie) => <MovieCard key={movie.id} movie={movie} /> 
                ) }
            </div>
        </div>
    );
}

export default Home;
