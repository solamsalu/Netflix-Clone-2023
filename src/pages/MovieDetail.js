import React, { useEffect, useState } from 'react';
import axios from '../Axios'; // Adjust the path
import { useParams } from 'react-router-dom'; // to get the movie ID from the URL
import './MovieDetail.css';

function MovieDetail() {
  const { movieId } = useParams();  // Get movieId from the URL
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(`/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`);
      setMovie(request.data);
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div className="movieDetail">
      {movie && (
        <>
          <h1>{movie.title || movie.name}</h1>
          <img
            className="movieDetail__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Release Date: {movie.release_date || movie.first_air_date}</p>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
