export default () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.baseUrl;
  const apiKey = config.public.currencyKey;

  //Movies 

    const get = async(get, page) => {
      return useFetch(`${baseUrl}${get}api_key=${apiKey}&page=${page}`)
    }

    // Get Now Playing : https://api.themoviedb.org/3/movie/now_playing?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Popular : https://api.themoviedb.org/3/movie/popular?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Top Rated : https://api.themoviedb.org/3/movie/top_rated?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={CURRENCY_API_KEY}
  
  // Get All Genres

    // Get Movie List : https://api.themoviedb.org/3/genre/movie/list?api_key={CURRENCY_API_KEY}

  // Series

    // Get Popular : https://api.themoviedb.org/3/tv/popular?api_key={CURRENCY_API_KEY}&page=${page}

    // Get Details : https://api.themoviedb.org/3/tv/{tv_id}?api_key={CURRENCY_API_KEY}

    // Get Top Rated : https://api.themoviedb.org/3/tv/top_rated?api_key={CURRENCY_API_KEY}&page=${page}

  // Get All Genres

    // Get TV List : https://api.themoviedb.org/3/genre/tv/list?api_key={CURRENCY_API_KEY}

  // Get a Single Genres
}