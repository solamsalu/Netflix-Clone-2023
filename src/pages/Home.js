import React from 'react';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Navbar from '../components/Navbar';
import requests from '../Request'; 
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Movie Rows */}
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
