import React, { useState, useEffect } from 'react';
import axios from '../Axios'; // Import the Axios instance
import requests from '../Request'; // Import requests
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'; // Import ReactPlayer
import '../styles/Banner.css';

function Banner() {
  const [movie, setMovie] = useState(null); // Store a single movie object
  const [trailerUrl, setTrailerUrl] = useState(''); // State to store the trailer URL
  const [playing, setPlaying] = useState(false); // State to track if the trailer is playing
  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length) // Fix random selection
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchTrailer() {
      if (movie) {
        try {
          const trailerRequest = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=YOUR_TMDB_API_KEY`
          );
          console.log('Trailer Request:', trailerRequest.data); // Debugging: Log the API response
          const trailers = trailerRequest.data.results.filter(
            (video) => video.type === 'Trailer' && video.site === 'YouTube'
          );
          if (trailers.length > 0) {
            setTrailerUrl(`https://www.youtube.com/watch?v=${trailers[0].key}`);
          } else {
            console.log('No trailers found for this movie.');
          }
        } catch (error) {
          console.error('Error fetching trailer:', error);
        }
      }
    }
    fetchTrailer();
  }, [movie]);

  const handlePlay = () => {
    if (trailerUrl) {
      setPlaying(true); // Set playing to true to show the video player
    } else {
      alert("Trailer not available");
    }
  };

  return (
    <header className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="navbar__button" onClick={handlePlay}>
            Play
          </button>
          <button className="navbar__button" onClick={() => navigate('/mylist')}>
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {movie?.overview}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
      {playing && (
        <div className="video__player">
          <ReactPlayer 
            url={trailerUrl} 
            playing 
            controls 
            width="100%" 
            height="100%" 
          />
        </div>
      )}
    </header>
  );
}

export default Banner;
