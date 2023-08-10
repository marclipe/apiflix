import { Container, ContainerMovie } from "./styles";
import imageLogo from '../../assets/logo.png'
import { FilmSlate } from "@phosphor-icons/react";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

interface Movie {
  id: number; 
  title: string; 
  overview: string;
  poster_path: string
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function ContainerFlix() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await api.get("/movie/popular", {
          params: {
            api_key: API_KEY,
          },
        }); 
        setMovies(response.data.results)
        console.log(response.data.results)
      } catch (error) {
        console.log('Error fetching movies: ', error)
      }
    };

    fetchPopularMovies();
  }, []);

  function handleFindRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length); 
    setRandomMovie(movies[randomIndex])
  }

  return (
    <Container>
      <div className="classDivs">
        <img src={imageLogo} alt="" />
        <h1>Não sabe o que assistir?</h1>
      </div>
      <div className="classDivs">
        <button onClick={handleFindRandomMovie}>
          <FilmSlate weight="fill" size={32} color="#1E46A3 " />
          Encontre filme
        </button>
        <p>
          Clique em "Encontrar filme" que traremos informações de algum filme
          para você assistir hoje.
        </p>
      </div>
      <ContainerMovie>
        {randomMovie && (
          <div className="containerInfoMovies">
            <div>
              <img
                src={`${IMAGE_BASE_URL}${randomMovie.poster_path}`}
                alt={randomMovie.title}
              />
            </div>
            <div>
              <h2>{randomMovie.title}</h2>
              <p>{randomMovie.overview}</p>
            </div>
          </div>
        )}
      </ContainerMovie>
    </Container>
  );
}