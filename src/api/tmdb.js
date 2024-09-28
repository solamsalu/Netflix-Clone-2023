// import axios from 'axios';

// // Create an instance of Axios with the TMDb base URL
// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
// });

// // API Calls
// export const fetchMovies = (endpoint) => {
//   return instance.get(endpoint);
// };





// export const fetchPopularMovies = () => {
//    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
//    return fetchMovies(`/movie/popular?api_key=${apiKey}`);
//  };
 
//  // Example function to fetch movie details by ID
//  export const fetchMovieDetails = (movieId) => {
//    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
//    return fetchMovies(`/movie/${movieId}?api_key=${apiKey}`);
//  };
 
import axios from 'axios';

// Create an instance of Axios with the TMDb base URL
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// API Calls
export const fetchMovies = async (endpoint) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  return fetchMovies(`/movie/popular?api_key=${apiKey}`);
};

// Example function to fetch movie details by ID
export const fetchMovieDetails = async (movieId) => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  if (!apiKey) {
    console.error('API key is missing');
    return;
  }
  return fetchMovies(`/movie/${movieId}?api_key=${apiKey}`);
};
