const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  // Netflix Originals
  fetchNetflixOriginals:
    `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  // Trending
  fetchTrending:
    `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  // Top Rated
  fetchTopRated:
    `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  // Action Movies
  fetchActionMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  // Comedy Movies
  fetchComedyMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  // Horror Movies
  fetchHorrorMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  // Romance Movies
  fetchRomanceMovies:
    `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  // Documentaries
  fetchDocumentaries:
    `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;