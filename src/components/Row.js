import React, { useEffect, useState } from 'react';
import axios from '../Axios'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import '../styles/Row.css';

const base_url = "https://image.tmdb.org/t/p/original/"; // Define base_url for images

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name || movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
