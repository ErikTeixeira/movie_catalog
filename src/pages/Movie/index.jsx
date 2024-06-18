import { useState, useEffect } from "react";
// uso para pegar o valor da url
import { useParams } from "react-router-dom";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";

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
    
    // Função para formatar a data
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Função para formatar o dinheiro
    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", 
            {style: "currency", currency: "USD"}
        )
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
                        <LuCalendarDays /> Data de lançamento:
                    </h3>
                    <p> { formatDate(movie.release_date) } </p>
                </div>

                <div className="info" >
                    <h3>
                        <BsWallet2 /> Orçamento:
                    </h3>
                    <p> { formatCurrency(movie.budget) } </p>
                </div>

                <div className="info" >
                    <h3>
                        <BsGraphUp /> Receita:
                    </h3>
                    <p> { formatCurrency(movie.revenue) } </p>
                </div>

                <div className="info" >
                    <h3>
                        <BsHourglassSplit /> Duração:
                    </h3>
                    <p> {movie.runtime} minutos </p>
                </div>

                <div className="info">
                        <h3>
                            <RiMovie2Fill /> Gêneros:
                        </h3>
                        <p>
                            {movie.genres.map((genre) => genre.name).join(", ")}
                        </p>
                    </div>

                <div className="info description" >
                    <h3>
                        <BsFillFileEarmarkTextFill /> Descrição:
                    </h3>
                    <p> {movie.overview}</p>
                </div>
            </>}
        </div>
    );
}

export default Movie;