import { useState, useEffect } from "react";

import CustomSwiper from "../../components/Swiper";

import "./Home.css";

// buscar as variaveis do env
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [ nowPlayingMovies, setNowPlayingMovies ] = useState( [] );
    const [ popularMovies, setPopularMovies ] = useState( [] );

    const [slidePerViewUpcoming, setSlidePerViewUpcoming] = useState(2);
    const [slidePerViewPlaying, setSlidePerViewPlaying] = useState(5.5);

    const getUpcomingMovies = async (url) => {
        // O método fetch() é uma maneira moderna e mais flexível de fazer requisições de rede (como buscar dados de um servidor) em JavaScript. Ele permite que você recupere recursos de uma URL especificada, como JSON, imagens, HTML etc. Para usar o fetch() , você começa chamando-o com a URL do recurso que você deseja buscar.
        const response = await fetch(url);
        const data = await response.json();

        // está pegando apenas os results que tem os dados dos filmes, pois tem tem o page, results, total_pages, total_results
        setUpcomingMovies(data.results);
    };

    const getNowPlayingMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setNowPlayingMovies(data.results);
    };

    const getPopularMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
    };

    useEffect(() => {
        const upcomingUrl = `${moviesUrl}upcoming?${apiKey}&language=pt-BR`;
        const nowPlayingUrl = `${moviesUrl}now_playing?${apiKey}&language=pt-BR`;
        const popularUrl = `${moviesUrl}popular?${apiKey}&language=pt-BR`;


        getUpcomingMovies(upcomingUrl);
        getNowPlayingMovies(nowPlayingUrl);
        getPopularMovies(popularUrl);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 720) {
                setSlidePerViewUpcoming(1);
                setSlidePerViewPlaying(2);
                setPopularMovies(2);
            } else {
                setSlidePerViewUpcoming(2);
                setSlidePerViewPlaying(4.5);
                setPopularMovies(4.5);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="container">
            <h2>Próximos Filmes</h2>

            <div className="container-upcoming" >
                {upcomingMovies.length > 0 ? (
                    <CustomSwiper 
                        items={upcomingMovies} 
                        slidesPerView={slidePerViewUpcoming} 
                        delayNumber={4000} 
                        movieImage="backdrop_path"
                        showPagination={true}
                    />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>

            <h2>Filmes em Cartaz</h2>

            <div className="container-playing" >
                {nowPlayingMovies.length > 0 ? (
                    <CustomSwiper 
                        items={nowPlayingMovies} 
                        slidesPerView={slidePerViewPlaying} 
                        delayNumber={10000} 
                        movieImage="poster_path"
                        showPagination={false}
                    />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>

            <h2>Filmes Populares</h2>

            <div className="container-popular" >
                {popularMovies.length > 0 ? (
                    <CustomSwiper 
                        items={popularMovies} 
                        slidesPerView={slidePerViewPlaying} 
                        delayNumber={10000} 
                        movieImage="poster_path"
                        showPagination={false}
                    />
                ) : (
                    <p>Carregando...</p>
                )}
            </div>

        </div>
    );
};

export default Home;
