export default () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;
  const apiKey = config.public.currencyKey;

  //Movies 
    // Get Now Playing : https://api.themoviedb.org/3/movie/now_playing?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Popular : https://api.themoviedb.org/3/movie/popular?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Top Rated : https://api.themoviedb.org/3/movie/top_rated?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={CURRENCY_API_KEY}

    // Movie Discover : https://api.themoviedb.org/3/discover/movie?api_key={CURRENCY_API_KEY}&sort_by=popularity.desc&page=${page}
    const req = async(get, page) => {
      if(page) {
        return useFetch(`${baseUrl}${get}?api_key=${apiKey}${page}`)
      } else {
        return useFetch(`${baseUrl}${get}?api_key=${apiKey}`)
      }
    }

    const getMovies = async(get, page=1) => {
      let query = `&page=`;

      if (page) {
        query +=`${page}`;
      }
       return req(`movie/${get}`, query);
    }

    const getDetails = async(getId) => {
      if (getId) {
        return req(`movie/${getId}`, null);
      }
    }

    // Get All Genres: https://api.themoviedb.org/3/genre/movie/list?api_key={CURRENCY_API_KEY}

    const getGenres = async() => req(`genre/movie/list`);

      return {
        req,
        getMovies,
        getDetails,
        getGenres
      };

  // Series

    // Get Popular : https://api.themoviedb.org/3/tv/popular?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Details : https://api.themoviedb.org/3/tv/{tv_id}?api_key={CURRENCY_API_KEY}

    // Get Top Rated : https://api.themoviedb.org/3/tv/top_rated?api_key={CURRENCY_API_KEY}&page=${page}

  // Get All Genres

    // Get TV List : https://api.themoviedb.org/3/genre/tv/list?api_key={CURRENCY_API_KEY}

  // Get a Single Genres
}